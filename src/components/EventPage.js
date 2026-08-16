import React, { useState } from 'react';
import siteConfig from '../siteConfig';
import Card from './ui/Card';
import Button from './ui/Button';
import Input from './ui/Input';

function EventPage() {
  const [openEvent, setOpenEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', attending: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const events = siteConfig.events.events;

  // Calendar integration helpers
  const formatDateForCalendar = (dateStr, timeStr) => {
    const [year, month, day] = dateStr.split('-');
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    const date = new Date(year, month - 1, day, hours, minutes || 0);
    return date;
  };

  const formatICSDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const getGoogleCalendarUrl = (event) => {
    const startDate = formatDateForCalendar(event.date, event.time);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.name,
      dates: `${formatICSDate(startDate)}/${formatICSDate(endDate)}`,
      details: `${event.description || ''}\n\nVenue: ${event.venue}\nDress Code: ${event.dressCode || 'Not specified'}`,
      location: event.venue,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const getOutlookCalendarUrl = (event) => {
    const startDate = formatDateForCalendar(event.date, event.time);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const params = new URLSearchParams({
      subject: event.name,
      startdt: startDate.toISOString(),
      enddt: endDate.toISOString(),
      body: `${event.description || ''}\n\nVenue: ${event.venue}\nDress Code: ${event.dressCode || 'Not specified'}`,
      location: event.venue,
    });

    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  };

  const downloadICSFile = (event) => {
    const startDate = formatDateForCalendar(event.date, event.time);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Website//EN',
      'BEGIN:VEVENT',
      `DTSTART:${formatICSDate(startDate)}`,
      `DTEND:${formatICSDate(endDate)}`,
      `SUMMARY:${event.name}`,
      `DESCRIPTION:${event.description || ''}\\n\\nVenue: ${event.venue}\\nDress Code: ${event.dressCode || 'Not specified'}`,
      `LOCATION:${event.venue}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${event.name.replace(/\s+/g, '_')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleEvent = (eventId) => {
    setOpenEvent(openEvent === eventId ? null : eventId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.attending) {
      setErrorMessage('Please fill in your name and whether you will attend.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/submitRsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-apple-gray-50 pt-24 pb-20">
        <div className="section-container">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-4">
              <h1 className="text-4xl sm:text-title font-semibold text-apple-gray-900">
                {siteConfig.events.title}
              </h1>
              <button
                onClick={() => window.print()}
                className="no-print px-3 py-2 text-apple-gray-600 hover:text-apple-gray-900 transition-colors"
                aria-label="Print page"
                title="Print events"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
            </div>
            <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
              {siteConfig.events.subtitle}
            </p>
          </div>

          {/* Event Details (browse-only, no per-event RSVP) */}
          <div className="max-w-4xl mx-auto grid gap-6 lg:grid-cols-2 mb-16">
            {events.map((event) => (
              <Card
                key={event.id}
                className={`p-6 cursor-pointer ${openEvent === event.id ? 'lg:col-span-2' : ''}`}
                onClick={() => toggleEvent(event.id)}
              >
                <h2 className="text-xl font-semibold text-apple-gray-900 mb-2">
                  {event.name}
                </h2>
                {openEvent === event.id && (
                  <div className="mt-4 space-y-4" onClick={(e) => e.stopPropagation()}>
                    <div className="space-y-2">
                      <p className="text-apple-gray-700"><strong>Date:</strong> {event.date}</p>
                      <p className="text-apple-gray-700"><strong>Time:</strong> {event.time}</p>
                      <p className="text-apple-gray-700"><strong>Venue:</strong> {event.venue}</p>
                      {event.dressCode && (
                        <p className="text-apple-gray-700"><strong>Dress Code:</strong> {event.dressCode}</p>
                      )}
                      {event.description && (
                        <p className="text-apple-gray-600 mt-2">{event.description}</p>
                      )}
                    </div>
                    {event.mapEmbed && (
                      <div className="mt-4 rounded-xl overflow-hidden">
                        <iframe
                          src={event.mapEmbed}
                          width="100%"
                          height="200"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          title={`${event.name} Location`}
                        />
                      </div>
                    )}

                    {/* Add to Calendar */}
                    <div className="mt-4 pt-4 border-t border-apple-gray-200">
                      <p className="text-sm font-medium text-apple-gray-700 mb-2">Add to Calendar:</p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={getGoogleCalendarUrl(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                          Google
                        </a>
                        <a
                          href={getOutlookCalendarUrl(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v3.75h9v-3.75zM7.5 18v-5.25h9V18h-9z"/>
                          </svg>
                          Outlook
                        </a>
                        <button
                          onClick={() => downloadICSFile(event)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-apple-gray-700 text-white rounded-full hover:bg-apple-gray-800 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Apple/iCal
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Simple RSVP Form */}
          <div className="max-w-lg mx-auto">
            {formSubmitted ? (
              <Card className="p-8 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
                  Thank you for your RSVP!
                </h2>
                <p className="text-apple-gray-600">
                  We look forward to celebrating with you.
                </p>
              </Card>
            ) : (
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-apple-gray-900 mb-2 text-center">
                  RSVP
                </h3>
                <p className="text-sm text-apple-gray-600 mb-6 text-center">
                  Please confirm your attendance at the reception so we can plan seating and catering.
                </p>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                      Will you attend the reception?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="attending"
                          value="Yes"
                          checked={formData.attending === 'Yes'}
                          onChange={handleChange}
                        />
                        Yes, I'll be there
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="attending"
                          value="No"
                          checked={formData.attending === 'No'}
                          onChange={handleChange}
                        />
                        Sorry, can't make it
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-apple-gray-700 mb-2">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      className="input-apple min-h-[100px] resize-none"
                      placeholder="Any notes for us?"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? 'Submitting...' : 'Submit RSVP'}
                  </Button>
                </form>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventPage;
