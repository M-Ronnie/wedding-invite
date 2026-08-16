import React, { useState } from 'react';
import Card from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';

function RSVPPage() {
  const [formData, setFormData] = useState({
    name: '',
    attending: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
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
        setSubmitted(true);
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
    <div className="min-h-screen bg-apple-gray-50 pt-24 pb-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-title font-semibold text-apple-gray-900 mb-4">
            RSVP
          </h1>
          <p className="text-lg text-apple-gray-600 max-w-2xl mx-auto">
            Please let us know if you'll be able to join us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Will you attend?
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
          ) : (
            <Card className="p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-semibold text-apple-gray-900 mb-2">
                Thank You!
              </h2>
              <p className="text-apple-gray-600">
                Your RSVP has been received. We can't wait to celebrate with you!
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default RSVPPage;
