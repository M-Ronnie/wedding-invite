// Site Configuration
// Customize all content here to personalize your wedding website

const siteConfig = {
  // ============================================
  // SECRETS CONFIGURATION
  // ============================================
  // These are set in .env file, NOT here
  // Required secrets (all FREE - no credit card needed):
  // - GOOGLE_SERVICE_ACCOUNT_JSON (for photo upload & blessings)
  // - GOOGLE_DRIVE_FOLDER_ID (for photo storage)
  // - GOOGLE_SPREADSHEET_ID (for blessings & RSVP data)
  // - REACT_APP_RSVP_API_URL (optional: for RSVP form)
  // See README.md for complete free setup guide

  // ============================================
  // WEDDING TYPE
  // ============================================
  // Options: "hindu", "christian", "custom"
  // This determines which event presets are available
  weddingType: "hindu", // Change to "christian" or "custom" as needed

  // ============================================
  // FEATURE FLAGS - Enable/disable features
  // ============================================
  // All features are enabled by default - set to false to disable any feature
  features: {
    homepage: { enabled: true, label: "Home" },
    ourStory: { enabled: true, label: "Our Story" },
    events: { enabled: true, label: "Events & RSVP" },
    photoGallery: { enabled: true, label: "Photo Gallery" },
    uploadPhotos: { enabled: true, label: "Upload Photos" },
    blessings: { enabled: true, label: "Blessings" },
    weddingParty: { enabled: true, label: "Wedding Party" },
    registry: { enabled: true, label: "Registry" },
    travel: { enabled: true, label: "Travel & Accommodation" },
    faq: { enabled: true, label: "FAQ" },
    timeline: { enabled: true, label: "Timeline" },
  },

  // ============================================
  // EVENT PRESETS
  // ============================================
  // Pre-built event templates based on wedding type
  // Use these as reference or copy to events array below
  eventPresets: {
    hindu: [
      {
        name: "Engagement",
        description: "Ring ceremony and engagement celebration",
        dressCode: "Semi-formal",
      },
      {
        name: "Haldi",
        description: "Turmeric ceremony - traditional pre-wedding ritual",
        dressCode: "Traditional (yellow/white)",
      },
      {
        name: "Mehndi",
        description: "Henna ceremony - intricate designs and celebration",
        dressCode: "Traditional (bright colors)",
      },
      {
        name: "Sangeet",
        description: "Music and dance night with family and friends",
        dressCode: "Traditional or Semi-formal",
      },
      {
        name: "Baraat",
        description: "Groom's procession - grand entrance celebration",
        dressCode: "Traditional",
      },
      {
        name: "Vidhi",
        description: "Wedding rituals and ceremonies",
        dressCode: "Traditional",
      },
      {
        name: "Reception",
        description: "Wedding reception celebration",
        dressCode: "Formal",
      },
    ],
    christian: [
      {
        name: "Rehearsal Dinner",
        description: "Pre-wedding dinner with close family and friends",
        dressCode: "Semi-formal",
      },
      {
        name: "Wedding Ceremony",
        description: "Church ceremony - join us as we say 'I do'",
        dressCode: "Formal",
      },
      {
        name: "Cocktail Hour",
        description: "Post-ceremony cocktails and mingling",
        dressCode: "Semi-formal",
      },
      {
        name: "Reception",
        description: "Wedding reception with dinner and dancing",
        dressCode: "Formal",
      },
      {
        name: "After Party",
        description: "Late night celebration",
        dressCode: "Casual",
      },
    ],
    custom: [], // User defines their own events
  },

  // Couple Information
  couple: {
    name1: "Partner 1",
    name2: "Partner 2",
    displayName: "Partner 1 & Partner 2", // Used in navbar and footer
    name1Image: "/images/partner1.svg", // Path to partner 1's photo (replace with your image)
    name2Image: "/images/partner2.svg", // Path to partner 2's photo (replace with your image)
  },

  // Wedding Date (for countdown timer)
  wedding: {
    date: "2025-02-22T12:00:00", // ISO format date/time
    location: "City, Country",
  },

  // Homepage
  homepage: {
    title: "Welcome to Our Wedding Website!",
    subtitle:
      "We're so excited to share our special day with you. Capture and share your favorite moments from our wedding here!",
    ctaButton: "Upload Photos",
    backgroundImage: "/images/homage_page_background.png",
    showCountdown: true,
  },

  // Our Story Section
  ourStory: {
    partner1Story: {
      name: "Partner 1's Story",
      image: "/images/partner1.svg", // Replace with your photo
      story:
        "Share your story here. This is where you can tell your guests about your journey, how you met, and what makes your relationship special.",
    },
    partner2Story: {
      name: "Partner 2's Story",
      image: "/images/partner2.svg", // Replace with your photo
      story:
        "Share your story here. This is where you can tell your guests about your journey, how you met, and what makes your relationship special.",
    },
    howWeMet: {
      enabled: true,
      title: "How We Met",
      story:
        "Share the story of how you first met. This could be at college, through friends, online, or any other special way your paths crossed.",
    },
    proposal: {
      enabled: true,
      title: "The Proposal",
      story:
        "Tell your guests about your proposal story. Where did it happen? How did it go? Share those special moments!",
      image: "/images/photo1.svg", // Optional proposal photo
    },
    memories: {
      intro: "A few special moments from our journey together.",
      images: [
        "/images/photo1.svg", // Replace with your photos
        "/images/photo2.svg",
        "/images/photo3.svg",
        "/images/photo4.svg",
      ],
    },
    milestones: [
      {
        date: "2020-01-15",
        title: "First Date",
        description: "Our first date at the coffee shop",
      },
      {
        date: "2021-06-20",
        title: "Moved In Together",
        description: "Started our life together",
      },
      {
        date: "2023-12-25",
        title: "Engagement",
        description: "He said yes!",
      },
    ],
    backgroundImage: "/images/homage_page_background.png",
  },

  // ============================================
  // EVENTS/RSVP PAGE
  // ============================================
  // Customize your events below
  // For Hindu weddings: See eventPresets.hindu above for common events
  // For Christian weddings: See eventPresets.christian above for common events
  // For custom weddings: Create your own event list
  events: {
    title: "Celebrate With Us",
    subtitle:
      "We are thrilled to have you join us for these cherished moments.",
    events: [
      {
        id: 1,
        name: "Engagement & Seemanth Puja",
        date: "2025-02-22",
        time: "12:00 PM",
        venue: "Venue Name, City",
        mapEmbed: "https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL",
        dressCode: "Semi-formal", // Optional
        description: "Join us for our engagement ceremony", // Optional
        category: "pre-wedding", // Optional: for filtering
      },
      {
        id: 2,
        name: "Sangeet",
        date: "2025-02-22",
        time: "7:00 PM",
        venue: "Venue Name, City",
        mapEmbed: "https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL",
        dressCode: "Traditional", // Optional
        description: "An evening of music and dance", // Optional
        category: "pre-wedding", // Optional
      },
      {
        id: 3,
        name: "Vidhi",
        date: "2025-02-23",
        time: "9:00 AM",
        venue: "Venue Name, City",
        mapEmbed: "https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL",
        dressCode: "Traditional", // Optional
        description: "Traditional ceremony", // Optional
        category: "wedding", // Optional
      },
      {
        id: 4,
        name: "Mangalashtaka",
        date: "2025-02-23",
        time: "10:30 AM",
        venue: "Venue Name, City",
        mapEmbed: "https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL",
        dressCode: "Traditional", // Optional
        description: "Main wedding ceremony", // Optional
        category: "wedding", // Optional
      },
    ],
    // Google Apps Script URL for RSVP submissions (optional)
    // If not using Google Apps Script, you can set this to your own API endpoint
    rsvpApiUrl: process.env.REACT_APP_RSVP_API_URL || "https://sheetson.com",
    accommodationOptions: [
      { value: "Gladly Available", label: "Gladly Available" },
      { value: "Regretfully Not Available", label: "Regretfully Not Available" },
    ],
    backgroundImage: "/images/homage_page_background.png",
  },

  // Photo Gallery
  photoGallery: {
    title: "Our Photo Gallery",
    subtitle: "Memories captured from our special day",
    // Show uploaded photos from Google Drive
    showUploadedPhotos: true, // Set to false to hide uploaded photos
    // Static photos (always shown if provided)
    staticPhotos: [], // Array of photo URLs
    enableFiltering: true,
    enableDownload: true,
  },

  // Blessings Page
  blessings: {
    title: "Drop Us Your Blessing",
    subtitle:
      "Your blessings mean the world to us. Share your thoughts, prayers, and kind words as we embark on this new journey together.",
    backgroundImage: "/images/homage_page_background.png",
    showAllBlessings: true, // Show all submitted blessings
    enableSearch: true,
    enableLikes: false, // Optional: enable like/react functionality
  },

  // Upload Photos Page
  uploadPhotos: {
    title: "Upload Your Photos",
    subtitle: "Share your favorite moments from our special day!",
    backgroundImage: "/images/homage_page_background.png",
    enableCaptions: true, // Allow users to add captions
    maxFileSize: 10, // MB
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
  },

  // Wedding Party
  weddingParty: {
    title: "Our Wedding Party",
    subtitle: "Meet the amazing people standing with us",
    bridesmaids: [
      {
        name: "Bridesmaid 1",
        role: "Maid of Honor",
        image: "/images/partner1.svg", // Replace with actual photo
        bio: "Short bio about this person",
      },
      {
        name: "Bridesmaid 2",
        role: "Bridesmaid",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
    groomsmen: [
      {
        name: "Groomsman 1",
        role: "Best Man",
        image: "/images/partner1.svg", // Replace with actual photo
        bio: "Short bio about this person",
      },
      {
        name: "Groomsman 2",
        role: "Groomsman",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
  },

  // Registry/Gifts
  registry: {
    title: "Wedding Registry",
    subtitle:
      "Your presence is the greatest gift, but if you'd like to honor us with something special...",
    enableGiftTracking: true, // Enable gift reservation system
    registries: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/wedding-registry",
        description: "Our Amazon registry",
      },
      {
        name: "Target",
        url: "https://www.target.com/wedding-registry",
        description: "Our Target registry",
      },
    ],
    cashFunds: [
      {
        name: "Honeymoon Fund",
        description: "Help us create unforgettable memories",
        url: "https://example.com/honeymoon-fund",
      },
    ],
    thankYouMessage: "Thank you for your generous gifts!",
  },

  // Travel & Accommodation
  travel: {
    title: "Travel & Accommodation",
    subtitle: "Everything you need to know about getting here and staying here",
    // Coordinates for weather forecast (optional)
    // Get coordinates from: https://www.latlong.net/
    coordinates: {
      lat: null, // e.g., 40.7128 for New York
      lon: null, // e.g., -74.0060 for New York
    },
    hotels: [
      {
        name: "Hotel Name",
        address: "123 Main St, City, State",
        phone: "+1 (555) 123-4567",
        website: "https://example.com/hotel",
        description: "Beautiful hotel near the venue",
        distance: "0.5 miles from venue",
        bookingCode: "WEDDING2025", // Optional booking code
      },
    ],
    transportation: {
      airport: {
        name: "City International Airport",
        code: "XYZ",
        distance: "20 miles",
        directions: "Take Highway 101 North, exit at Main Street",
      },
      parking: "Free parking available at the venue",
      shuttle: "Shuttle service available from hotel (details TBD)",
    },
    localAttractions: [
      {
        name: "Local Attraction",
        description: "Great place to visit",
        website: "https://example.com/attraction",
      },
    ],
    maps: {
      venue: "https://www.google.com/maps/embed?pb=YOUR_VENUE_MAP",
      hotels: "https://www.google.com/maps/embed?pb=YOUR_HOTELS_MAP",
    },
  },

  // FAQ
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know",
    questions: [
      {
        title: "What should I wear?",
        content: "Semi-formal attire is requested. Please avoid white.",
      },
      {
        title: "Can I bring a plus one?",
        content: "Please check your invitation for plus one details.",
      },
      {
        title: "Will there be parking?",
        content: "Yes, free parking is available at the venue.",
      },
      {
        title: "What time should I arrive?",
        content: "Please arrive 15-30 minutes before the ceremony begins.",
      },
      {
        title: "Are children welcome?",
        content:
          "While we love your little ones, this will be an adults-only celebration.",
      },
    ],
  },

  // Timeline
  timeline: {
    title: "Our Journey",
    subtitle: "Milestones in our relationship",
    showPlanningTimeline: true, // Show wedding planning milestones
    items: [
      {
        date: "2020-01-15",
        title: "First Date",
        description: "Our first date at the coffee shop downtown",
        image: "/images/photo1.svg", // Optional
        type: "relationship", // "relationship" or "planning"
      },
      {
        date: "2020-06-20",
        title: "Official",
        description: "We made it official!",
        type: "relationship",
      },
      {
        date: "2021-06-20",
        title: "Moved In Together",
        description: "Started our life together in our first apartment",
        type: "relationship",
      },
      {
        date: "2023-12-25",
        title: "Engagement",
        description: "He said yes! We're getting married!",
        image: "/images/photo2.svg", // Optional
        type: "relationship",
      },
    ],
    // Wedding Planning Timeline
    planningItems: [
      {
        date: "2024-01-15",
        title: "Started Planning",
        description: "Began our wedding planning journey",
        type: "planning",
      },
      {
        date: "2024-03-20",
        title: "Venue Booked",
        description: "Found and booked our dream venue",
        type: "planning",
      },
      {
        date: "2024-06-15",
        title: "Vendors Selected",
        description: "Photographer, caterer, and florist confirmed",
        type: "planning",
      },
      {
        date: "2024-09-01",
        title: "Invitations Sent",
        description: "Save the dates and invitations sent to all guests",
        type: "planning",
      },
    ],
  },

  // Footer
  footer: {
    tagline:
      "True love is the greatest adventure. Thank you for being a part of our journey!",
    contactEmail: "wedding@example.com", // Optional
    socialMedia: {
      instagram: "https://instagram.com/yourhandle", // Optional
      facebook: "https://facebook.com/yourpage", // Optional
    },
  },

  // Navigation
  navigation: {
    blessingsLabel: "Blessings",
    ourStoryLabel: "Our Story",
    eventsLabel: "Events",
    galleryLabel: "Gallery",
    uploadLabel: "Upload",
    partyLabel: "Wedding Party",
    registryLabel: "Registry",
    travelLabel: "Travel",
    faqLabel: "FAQ",
    timelineLabel: "Timeline",
  },

  // App Metadata
  app: {
    name: "Wedding Invite",
    shortName: "Wedding",
    description: "A beautiful wedding website to share your special day",
  },
};

export default siteConfig;        date: "2024-08-02",
        title: "First Date",
        description: "Our first date",
      },
      {
        date: "2025-12-06",
        title: "She finally said yes to date",
        description: "Officially started courtship",
      },
      {
        date: "2026-03-28",
        title: "Engagement",
        description: "She said yes!",
      },
    ],
    backgroundImage: "https://i.ibb.co/nMZRrPDG/1-5.jpg",
  },

  // ============================================
  // EVENTS/RSVP PAGE
  // ============================================
  events: {
    title: "Celebrate With Us",
    subtitle: "We are thrilled to have you join us for these cherished moments.",
    events: [
      {
        id: 1,
        name: "Wedding Ceremony",
        date: "2026-10-24",
        time: "11:00 AM",
        venue: "Watoto Church, Ntinda",
        mapEmbed: "https://maps.app.goo.gl/oaexZirVyapA6r9c6",
        dressCode: "Elegant-formal",
        description: "Join us for our Holy Matrimony",
        category: "wedding",
      },
      {
        id: 2,
        name: "Reception",
        date: "2026-10-24",
        time: "2:30 PM",
        venue: "RCN Hall, Makerere-Kikoni",
        mapEmbed: "https://maps.app.goo.gl/1rN1YGqttUeTRFWg9",
        dressCode: "Elegant-formal",
        description: "An afternoon of celebrations",
        category: "post-wedding",
      }
    ],
    rsvpApiUrl: "https://api.sheetson.com/v2/sheets/Sheet1",
    accommodationOptions: [
      { value: "Joyfully Accepts", label: "Joyfully Accepts" },
      { value: "Regretfully Declines", label: "Regretfully Declines" },
    ],
    backgroundImage: "/images/homage_page_background.png",
  },

  // Photo Gallery
  photoGallery: {
    title: "Our Photo Gallery",
    subtitle: "Memories captured from our special day",
    showUploadedPhotos: true,
    staticPhotos: [],
    enableFiltering: true,
    enableDownload: true,
  },

  // Blessings Page
  blessings: {
    title: "Drop Us Your Blessing",
    subtitle: "Your blessings mean the world to us. Share your thoughts, prayers, and kind words as we embark on this new journey together.",
    backgroundImage: "https://i.ibb.co/MxGHDxSW/1000748265.jpg",
    showAllBlessings: true,
    enableSearch: true,
    enableLikes: false,
  },

  // Upload Photos Page
  uploadPhotos: {
    title: "Upload Your Photos",
    subtitle: "Share your favorite moments from our special day!",
    backgroundImage: "https://i.ibb.co/PvT5Rp98/1000748264.jpg",
    enableCaptions: true,
    maxFileSize: 10,
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
  },

  // Wedding Party
  weddingParty: {
    title: "Our Wedding Party",
    subtitle: "Meet the amazing people standing with us",
    bridesmaids: [
      {
        name: "Bridesmaid 1",
        role: "Maid of Honor",
        image: "/images/partner1.svg",
        bio: "Short bio about this person",
      },
      {
        name: "Bridesmaid 2",
        role: "Bridesmaid",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
    groomsmen: [
      {
        name: "Groomsman 1",
        role: "Best Man",
        image: "/images/partner1.svg",
        bio: "Short bio about this person",
      },
      {
        name: "Groomsman 2",
        role: "Groomsman",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
  },

  // Registry/Gifts
  registry: {
    title: "Wedding Registry",
    subtitle: "Your presence is the greatest gift, but if you'd like to honor us with something special...",
    enableGiftTracking: true,
    registries: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/wedding-registry",
        description: "Our Amazon registry",
      },
      {
        name: "Target",
        url: "https://www.target.com/wedding-registry",
        description: "Our Target registry",
      },
    ],
    cashFunds: [
      {
        name: "Honeymoon Fund",
        description: "Help us create unforgettable memories",
        url: "https://example.com/honeymoon-fund",
      },
    ],
    thankYouMessage: "Thank you for your generous gifts!",
  },

  // FAQ
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know",
    questions: [
      {
        title: "What should I wear?",
        content: "Elegant-formal attire is requested. Please avoid revealing clothes.",
      },
      {
        title: "Can I bring a plus one?",
        content: "Please check your invitation for plus one details.",
      },
      {
        title: "Will there be parking?",
        content: "Yes, free parking is available at the venue.",
      },
      {
        title: "What time should I arrive?",
        content: "Please arrive 15-30 minutes before the ceremony begins.",
      },
      {
        title: "Are children welcome?",
        content: "While we love your little ones, this will be an adults-only celebration.",
      },
    ],
  },

  // Timeline
  timeline: {
    title: "Our Journey",
    subtitle: "Milestones in our relationship",
    showPlanningTimeline: false,
    items: [
      {
        date: "2024-08-02",
        title: "First Date",
        description: "Our very first date together.",
        image: "/images/photo1.svg",
        type: "relationship",
      },
      {
        date: "2025-12-06",
        title: "Official Courtship",
        description: "She finally said yes to being exclusive!",
        type: "relationship",
      },
      {
        date: "2026-03-28",
        title: "Engagement",
        description: "She said yes! We're getting married!",
        image: "/images/photo2.svg",
    },
    milestones: [
      {
        date: "2024-08-02",
        title: "First Date",
        description: "Our first date",
      },
      {
        date: "2025-12-06",
        title: "She finally said yes to date",
        description: "Officially started courtship",
      },
      {
        date: "2026-03-28",
        title: "Engagement",
        description: "She said yes!",
      },
    ],
    backgroundImage: "https://ibb.co",
  },

  // ============================================
  // EVENTS/RSVP PAGE
  // ============================================
  // Customize your events below
  events: {
    title: "Celebrate With Us",
    subtitle: "We are thrilled to have you join us for these cherished moments.",
    events: [
      {
        id: 1,
        name: "Wedding Ceremony",
        date: "2026-10-24",
        time: "11:00 AM",
        venue: "Watoto Church, Ntinda",
        mapEmbed: "https://goo.gl",
        dressCode: "Elegant-formal",
        description: "Join us for our Holy Matrimony",
        category: "wedding",
      },
      {
        id: 2,
        name: "Reception",
        date: "2026-10-24",
        time: "2:30 PM",
        venue: "RCN Hall, Makerere-Kikoni",
        mapEmbed: "https://goo.gl",
        dressCode: "Elegant-formal",
        description: "An afternoon of celebrations",
        category: "post-wedding",
      }
    ],
    // FIXED: Sheetson data API target endpoint
    rsvpApiUrl: "https://sheetson.com",
    
    // Configured dropdown options for your guests
    accommodationOptions: [
      { value: "Joyfully Accepts", label: "Joyfully Accepts" },
      { value: "Regretfully Declines", label: "Regretfully Declines" },
    ],
    backgroundImage: "/images/homage_page_background.png",
  },

  // Photo Gallery
  photoGallery: {
    title: "Our Photo Gallery",
    subtitle: "Memories captured from our special day",
    showUploadedPhotos: true,
    staticPhotos: [],
    enableFiltering: true,
    enableDownload: true,
  },

  // Blessings Page
  blessings: {
    title: "Drop Us Your Blessing",
    subtitle: "Your blessings mean the world to us. Share your thoughts, prayers, and kind words as we embark on this new journey together.",
    backgroundImage: "https://ibb.co",
    showAllBlessings: true,
    enableSearch: true,
    enableLikes: false,
  },

  // Upload Photos Page
  uploadPhotos: {
    title: "Upload Your Photos",
    subtitle: "Share your favorite moments from our special day!",
    backgroundImage: "https://ibb.co",
    enableCaptions: true,
    maxFileSize: 10,
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
  },

  // Wedding Party
  weddingParty: {
    title: "Our Wedding Party",
    subtitle: "Meet the amazing people standing with us",
    bridesmaids: [
      {
        name: "Bridesmaid 1",
        role: "Maid of Honor",
        image: "/images/partner1.svg",
        bio: "Short bio about this person",
      },
      {
        name: "Bridesmaid 2",
        role: "Bridesmaid",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
    groomsmen: [
      {
        name: "Groomsman 1",
        role: "Best Man",
        image: "/images/partner1.svg",
        bio: "Short bio about this person",
      },
      {
        name: "Groomsman 2",
        role: "Groomsman",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
  },

  // Registry/Gifts
  registry: {
    title: "Wedding Registry",
    subtitle: "Your presence is the greatest gift, but if you'd like to honor us with something special...",
    enableGiftTracking: true,
    registries: [
      {
        name: "Amazon",
        url: "https://amazon.com",
        description: "Our Amazon registry",
      },
      {
        name: "Target",
        url: "https://target.com",
        description: "Our Target registry",
      },
    ],
    cashFunds: [
      {
        name: "Honeymoon Fund",
        description: "Help us create unforgettable memories",
        url: "https://example.com",
      },
    ],
    thankYouMessage: "Thank you for your generous gifts!",
  },

  // FAQ
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know",
    questions: [
      {
        title: "What should I wear?",
        content: "Elegant-formal attire is requested. Please avoid revealing clothes.",
      },
      {
        title: "Can I bring a plus one?",
        content: "Please check your invitation for plus one details.",
      },
      {
        title: "Will there be parking?",
        content: "Yes, free parking is available at the venue.",
      },
      {
        title: "What time should I arrive?",
        content: "Please arrive 15-30 minutes before the ceremony begins.",
      },
      {
        title: "Are children welcome?",
        content: "While we love your little ones, this will be an adults-only celebration.",
      },
    ],
  },

  // Timeline
  timeline: {
    title: "Our Journey",
    subtitle: "Milestones in our relationship",
    },
    milestones: [
      {
        date: "2024-08-02",
        title: "First Date",
        description: "Our first date",
      },
      {
        date: "2025-12-06",
        title: "She finally said yes to date",
        description: "Officially started courtship",
      },
      {
        date: "2026-03-28",
        title: "Engagement",
        description: "She said yes!",
      },
    ],
    backgroundImage: "https://ibb.co",
  },

  // ============================================
  // EVENTS/RSVP PAGE
  // ============================================
  // Customize your events below
  events: {
    title: "Celebrate With Us",
    subtitle: "We are thrilled to have you join us for these cherished moments.",
    events: [
      {
        id: 1,
        name: "Wedding Ceremony",
        date: "2026-10-24",
        time: "11:00 AM",
        venue: "Watoto Church, Ntinda",
        mapEmbed: "https://goo.gl",
        dressCode: "Elegant-formal",
        description: "Join us for our Holy Matrimony",
        category: "wedding",
      },
      {
        id: 2,
        name: "Reception",
        date: "2026-10-24",
        time: "2:30 PM",
        venue: "RCN Hall, Makerere-Kikoni",
        mapEmbed: "https://goo.gl",
        dressCode: "Elegant-formal",
        description: "An afternoon of celebrations",
        category: "post-wedding",
      }
    ],
    // FIXED: Sheetson data API target endpoint
    rsvpApiUrl: "https://sheetson.com",
    
    // Configured dropdown options for your guests
    accommodationOptions: [
      { value: "Joyfully Accepts", label: "Joyfully Accepts" },
      { value: "Regretfully Declines", label: "Regretfully Declines" },
    ],
    backgroundImage: "/images/homage_page_background.png",
  },

  // Photo Gallery
  photoGallery: {
    title: "Our Photo Gallery",
    subtitle: "Memories captured from our special day",
    showUploadedPhotos: true,
    staticPhotos: [],
    enableFiltering: true,
    enableDownload: true,
  },

  // Blessings Page
  blessings: {
    title: "Drop Us Your Blessing",
    subtitle: "Your blessings mean the world to us. Share your thoughts, prayers, and kind words as we embark on this new journey together.",
    backgroundImage: "https://ibb.co",
    showAllBlessings: true,
    enableSearch: true,
    enableLikes: false,
  },

  // Upload Photos Page
  uploadPhotos: {
    title: "Upload Your Photos",
    subtitle: "Share your favorite moments from our special day!",
    backgroundImage: "https://ibb.co",
    enableCaptions: true,
    maxFileSize: 10,
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
  },

  // Wedding Party
  weddingParty: {
    title: "Our Wedding Party",
    subtitle: "Meet the amazing people standing with us",
    bridesmaids: [
      {
        name: "Bridesmaid 1",
        role: "Maid of Honor",
        image: "/images/partner1.svg",
        bio: "Short bio about this person",
      },
      {
        name: "Bridesmaid 2",
        role: "Bridesmaid",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
    groomsmen: [
      {
        name: "Groomsman 1",
        role: "Best Man",
        image: "/images/partner1.svg",
        bio: "Short bio about this person",
      },
      {
        name: "Groomsman 2",
        role: "Groomsman",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
  },

  // Registry/Gifts
  registry: {
    title: "Wedding Registry",
    subtitle: "Your presence is the greatest gift, but if you'd like to honor us with something special...",
    enableGiftTracking: true,
    registries: [
      {
        name: "Amazon",
        url: "https://amazon.com",
        description: "Our Amazon registry",
      },
      {
        name: "Target",
        url: "https://target.com",
        description: "Our Target registry",
      },
    ],
    cashFunds: [
      {
        name: "Honeymoon Fund",
        description: "Help us create unforgettable memories",
        url: "https://example.com",
      },
    ],
    thankYouMessage: "Thank you for your generous gifts!",
  },

  // FAQ
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know",
    questions: [
      {
        title: "What should I wear?",
        content: "Elegant-formal attire is requested. Please avoid revealing clothes.",
      },
      {
        title: "Can I bring a plus one?",
        content: "Please check your invitation for plus one details.",
      },
      {
        title: "Will there be parking?",
        content: "Yes, free parking is available at the venue.",
      },
      {
        title: "What time should I arrive?",
        content: "Please arrive 15-30 minutes before the ceremony begins.",
      },
      {
        title: "Are children welcome?",
        content: "While we love your little ones, this will be an adults-only celebration.",
      },
    ],
  },

  // Timeline
  timeline: {
    title: "Our Journey",
    subtitle: "Milestones in our relationship",
    title: "Our Wedding Party",
    subtitle: "Meet the amazing people standing with us",
    bridesmaids: [
      {
        name: "Bridesmaid 1",
        role: "Maid of Honor",
        image: "/images/partner1.svg", // Replace with actual photo
        bio: "Short bio about this person",
      },
      {
        name: "Bridesmaid 2",
        role: "Bridesmaid",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
    groomsmen: [
      {
        name: "Groomsman 1",
        role: "Best Man",
        image: "/images/partner1.svg", // Replace with actual photo
        bio: "Short bio about this person",
      },
      {
        name: "Groomsman 2",
        role: "Groomsman",
        image: "/images/partner2.svg",
        bio: "Short bio about this person",
      },
    ],
  },

  // Registry/Gifts
  registry: {
    title: "Wedding Registry",
    subtitle: "Your presence is the greatest gift, but if you'd like to honor us with something special...",
    enableGiftTracking: true, // Enable gift reservation system
    registries: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/wedding-registry",
        description: "Our Amazon registry",
      },
      {
        name: "Target",
        url: "https://www.target.com/wedding-registry",
        description: "Our Target registry",
      },
    ],
    cashFunds: [
      {
        name: "Honeymoon Fund",
        description: "Help us create unforgettable memories",
        url: "https://example.com/honeymoon-fund",
      },
    ],
    thankYouMessage: "Thank you for your generous gifts!",
  },

  // FAQ
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know",
    questions: [
      {
        title: "What should I wear?",
        content: "Elegant-formal attire is requested. Please avoid revealing clothes.",
      },
      {
        title: "Can I bring a plus one?",
        content: "Please check your invitation for plus one details.",
      },
      {
        title: "Will there be parking?",
        content: "Yes, free parking is available at the venue.",
      },
      {
        title: "What time should I arrive?",
        content: "Please arrive 15-30 minutes before the ceremony begins.",
      },
      {
        title: "Are children welcome?",
        content: "While we love your little ones, this will be an adults-only celebration.",
      },
    ],
  },

  // Timeline
  timeline: {
    title: "Our Journey",
    subtitle: "Milestones in our relationship",
    showPlanningTimeline: true, // Show wedding planning milestones
    items: [
      {
        date: "2020-01-15",
        title: "First Date",
        description: "Our first date at the coffee shop downtown",
        image: "/images/photo1.svg", // Optional
        type: "relationship", // "relationship" or "planning"
      },
      {
        date: "2020-06-20",
        title: "Official",
        description: "We made it official!",
        type: "relationship",
      },
      {
        date: "2021-06-20",
        title: "Moved In Together",
        description: "Started our life together in our first apartment",
        type: "relationship",
      },
      {
        date: "2023-12-25",
        title: "Engagement",
        description: "He said yes! We're getting married!",
        image: "/images/photo2.svg", // Optional
        type: "relationship",
      },
    ],
    // Wedding Planning Timeline
    planningItems: [
      {
        date: "2024-01-15",
        title: "Started Planning",
        description: "Began our wedding planning journey",
        type: "planning",
      },
      {
        date: "2024-03-20",
        title: "Venue Booked",
        description: "Found and booked our dream venue",
        type: "planning",
      },
      {
        date: "2024-06-15",
        title: "Vendors Selected",
        description: "Photographer, caterer, and florist confirmed",
        type: "planning",
      },
      {
        date: "2024-09-01",
        title: "Invitations Sent",
        description: "Save the dates and invitations sent to all guests",
        type: "planning",
      },
    ],
  },

  // Footer
  footer: {
    tagline: "He who finds a wife finds a good thing and obtains favour from the LORD. Thank you for being a part of our journey!",
  },

  // Navigation
  navigation: {
    blessingsLabel: "Blessings",
    ourStoryLabel: "Our Story",
    eventsLabel: "Events",
    galleryLabel: "Gallery",
    uploadLabel: "Upload",
    partyLabel: "Wedding Party",
    registryLabel: "Registry",
    travelLabel: "Travel",
    faqLabel: "FAQ",
    timelineLabel: "Timeline",
  },

  // App Metadata
  app: {
    name: "Wedding Invite",
    shortName: "Wedding",
    description: "A beautiful wedding website to share your special day",
  },
};

export default siteConfig;
