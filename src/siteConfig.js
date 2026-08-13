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
  weddingType: "christian", // Change to "christian" or "custom" as needed

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
    faq: { enabled: true, label: "FAQ" },
  },

  // ============================================
  // EVENT PRESETS
  // ============================================
  // Pre-built event templates based on wedding type
  // Use these as reference or copy to events array below
  eventPresets: {
    christian: [
      // { name: "Rehearsal Dinner", description: "Pre-wedding dinner with close family and friends", dressCode: "Semi-formal" },
      { name: "Wedding Ceremony", description: "Church ceremony - join us as we say 'I do'", dressCode: "Elegant-formal" },
      // { name: "Cocktail Hour", description: "Post-ceremony cocktails and mingling", dressCode: "Semi-formal" },
      { name: "Reception", description: "Wedding reception with lunch and celebrations", dressCode: "Elegant-formal" },
      // { name: "After Party", description: "Late night celebration", dressCode: "Casual" },
    ],
    // custom: [], // User defines their own events
  },

  // Couple Information
  couple: {
    name1: "Masisa Ronald",
    name2: "Kirabo Peninah Nassozi",
    displayName: "Ronny & Penny", // Used in navbar and footer
    name1Image: "https://ibb.co", // Path to partner 1's photo (replace with your image)
    name2Image: "https://ibb.co", // Path to partner 2's photo (replace with your image)
  },

  // Wedding Date (for countdown timer)
  wedding: {
    date: "2026-10-24T11:00:00", // ISO format date/time
    location: "Kampala, Uganda",
  },

  // Homepage
  homepage: {
    title: "Welcome to Our Wedding Website!",
    subtitle: "We're so excited to share our special day with you. Capture and share your favorite moments from our wedding here!",
    ctaButton: "https://pixbearer.com",
    backgroundImage: "https://ibb.co",
    showCountdown: true,
  },

  // Our Story Section
  ourStory: {
    howWeMet: {
      enabled: true,
      title: "How We Met",
      story: "We met at a fellowship for singles called SWAP - Singles With A Purpose.",
    },
    proposal: {
      enabled: true,
      title: "The Proposal",
      story: "Tell your guests about your proposal story. Where did it happen? How did it go? Share those special moments!",
      image: "https://ibb.co", // Optional proposal photo
    },
    memories: {
      intro: "A few special moments from our journey together.",
      images: [
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co",
        "https://ibb.co"
      ],
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
