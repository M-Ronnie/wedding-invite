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
  weddingType: "custom", // Change to "christian" or "custom" as needed

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
    travel: { enabled: false, label: "Travel & Accommodation" },
    faq: { enabled: true, label: "FAQ" },
    timeline: { enabled: true, label: "Timeline" },
  },

  // ============================================
  // EVENT PRESETS
  // ============================================
  // Pre-built event templates based on wedding type
  // Use these as reference or copy to events array below
  eventPresets: {
    christian: [],
    custom: [
      {
        name: "Wedding Ceremony",
        description: "Church ceremony - join us as we say 'I do'",
        dressCode: "Elegant-Formal",
      },
      {
        name: "Reception",
        description: "Wedding reception with dinner and dancing",
        dressCode: "Elegant-Formal",
      },
    ], // User defines their own events
  },

  // Couple Information
  couple: {
    name1: "Masisa Ronald",
    name2: "Kirabo Peninah Nassozi",
    displayName: "Ronny & Penny", // Used in navbar and footer
    name1Image: "https://i.ibb.co/67q3RMrM/IMG-20241221-181446-032418.jpg", // Path to partner 1's photo (replace with your image)
    name2Image: "https://i.ibb.co/vxxLww2f/IMG-20251231-142334.jpg", // Path to partner 2's photo (replace with your image)
  },
  contact: {
  whatsapp: [
    { label: "Ronald", number: "+256788711240" },
    { label: "Peninah", number: "+256785443487" },
  ],
  email: "ronnywedspenny@gmail.com",
},
  // Wedding Date (for countdown timer)
  wedding: {
    date: "2026-10-24T11:00:00", // ISO format date/time
    location: "Kampala, Uganda",
  },

  // Homepage
  homepage: {
    title: "Welcome to Our Wedding Website!",
    subtitle:
      "We're so excited to share our special day with you. Capture and share your favorite moments from our wedding here!",
    logo: "https://i.ibb.co/Mys0D4t2/Untitled-August-18-2026-at-11-57-57.png",
    ctaButton: "Upload Photos",
    backgroundImage: "https://i.ibb.co/kgcGjHrQ/1W0A1835.jpg",
    showCountdown: true,
  },

  // Our Story Section
  ourStory: {
    partner1Story: {
      name: "Ronny's Story",
      image: "https://i.ibb.co/67q3RMrM/IMG-20241221-181446-032418.jpg", // Replace with your photo
      story: "I first set my eyes on her at an event I was in charge of for a ministry called SWAP. Then again at a friend's wedding where she was putting a lovely dress in my fav colours. Next thing was to pray and see if God stamps it and here we are.",
    },
    partner2Story: {
      name: "Penny's Story",
      image: "https://i.ibb.co/vxxLww2f/IMG-20251231-142334.jpg", // Replace with your photo
      story: "Share your story here. This is where you can tell your guests about your journey, how you met, and what makes your relationship special.",
    },
    howWeMet: {
      enabled: true,
      title: "How We Met",
      story:
        "We met at a ministry for singles called SWAP - Singles With A Purpose.",
    },
    proposal: {
      enabled: true,
      title: "The Proposal",
      story: "It was at the Patio joined with our friends and family. What a beautiful moment it was!",
      image: "https://i.ibb.co/nMZRrPDG/1-5.jpg", // Optional proposal photo
    },
    memories: {
      intro: "A few special moments from our journey together.",
      images: [
        "https://i.ibb.co/V6g0Whn/IMG-20260803-222109.jpg", // Replace with your photos
        "https://i.ibb.co/b5PgTDRD/1-4.jpg",
        "https://i.ibb.co/B2qtyJp1/1000748269.jpg",
        "https://i.ibb.co/fV2VxFhC/1000748264.jpg",
      ],
    },
    milestones: [
      {
        date: "2024-08-04",
        title: "First Date",
        description: "Our first date at Antonio's Cafe",
      },
      {
        date: "2026-03-28",
        title: "The Proposal",
        description: "She said YES!",
      },
      {
        date: "2026-08-01",
        title: "Kukyala",
        description: "It was now officially official that we're betrothed.",
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
        name: "Wedding Ceremony",
        date: "2026-10-24",
        time: "11:00 AM",
        venue: "Watoto Church, Ntinda",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.739709429405!2d32.6029261734923!3d0.35966916396133564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba40aa0c4f47%3A0x9234de6768e330f3!2sWatoto%20Church%20Ntinda!5e0!3m2!1sen!2sug!4v1788036995282!5m2!1sen!2sug",
        dressCode: "Elegant-formal", // Optional
        description: "Join us as we say our vows", // Optional
        category: "Wedding", // Optional: for filtering
      },
      {
        id: 2,
        name: "Reception",
        date: "2026-10-24",
        time: "2:30 PM",
        venue: "RCN Hall, Makerere-Kikoni",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7501990769833!2d32.55849337349233!3d0.33481356400053797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb303548d525%3A0x20c5885bda2d6578!2sRemnant%20Christian%20Network%20Uganda%20(RCN%20Uganda)!5e0!3m2!1sen!2sug!4v1788037383063!5m2!1sen!2sug",
        dressCode: "Elegant-Formal", // Optional
        description: "An evening of celebration", // Optional
        category: "post-wedding", // Optional
      },
    ],
    // Google Apps Script URL for RSVP submissions (optional)
    // If not using Google Apps Script, you can set this to your own API endpoint
    accommodationOptions: [
      { value: "Available", label: "Available" },
      { value: "Not available", label: "Not Available" },
      { value: "Not Sure Yet", label: "Not Sure Yet" },
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
    subtitle: "Your blessings mean the world to us. Share your thoughts, prayers, and kind words as we embark on this new journey together.",
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
  image: "https://i.ibb.co/rfTtQ9Hn/3D8A0131.jpg", // one photo of both of them together
  maidOfHonorName: "Mrs. Hauda Tusibira Ngorok",
  bestManName: "Mr. Nathan Ngorok",
  bio: "Amazingly awesome friends of ours we met in SWAP and have since grown close. We're blessed to have them both walk with us this journey.",
},

  // Registry/Gifts
registry: {
  title: "Wedding Registry",
  subtitle: "Your presence is the greatest gift, but if you'd like to honor us with something special...",
  enableGiftTracking: true, // Enable gift reservation system
  cashFunds: [
  {
    name: "Mwebaze Alice Rebekah - Treasurer",
    description: "Send via mobile money to our treasurer",
    phones: [
      { label: "MTN", number: "+256783757405" },
      { label: "Airtel", number: "+256755789159" },
    ],
  },
  {
    name: "Masisa Ronald - Groom",
    description: "Send via mobile money to Ronald",
    phone: "+256788711240",
  },
  {
    name: "Kirabo Peninah Nassozi - Bride",
    description: "Send via mobile money to Peninah",
    phone: "+256785443487",
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
        content: "Elegant-formal attire is requested. Please avoid skimpy and revealing clothes.",
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
        date: "2024-08-02",
        title: "First Date",
        description: "Our first date",
        image: "/images/photo1.svg", // Optional
        type: "relationship", // "relationship" or "planning"
      },
      {
        date: "2026-03-28",
        title: "Proposal",
        description: "We made it official!",
        type: "relationship",
        image: "https://i.ibb.co/nMZRrPDG/1-5.jpg",
      },
      {
        date: "2026-08-01",
        title: "Kukyala",
        description: "We officially visited Ssenga",
        type: "relationship",
        image: "https://i.ibb.co/ym9wtbk6/1000748265.jpg",
      },
      {
        date: "2026-10-17",
        title: "Introduction",
        description: "Traditional Wedding",
        image: "https://i.ibb.co/fV2VxFhC/1000748264.jpg", // Optional
        type: "relationship",
      },
    ],
    // Wedding Planning Timeline
  },

  // Footer
  footer: {
    tagline:
      "He who finds a wife finds a good thing and obtains favour from the LORD. Thank you for being a part of our journey!",
    contactEmail: "ronnywedspenny@gmail.com", // Optional
    socialMedia: {
      instagram: "https://instagram.com/masisa4g", // Optional
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
    name: "Ronny weds Penny",
    shortName: "Wedding",
    description: "A beautiful wedding website to share our special day",
  },
};

export default siteConfig;
