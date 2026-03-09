const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Adam Smith Electrical",
  tagline: "Licensed Electrician Serving New York City Since 2015",
  phone: "(212) 555-0173",
  phoneHref: "tel:+12125550173",
  smsHref: "sms:+12125550173",
  email: "adam@adamsmithelectrical.com",
  address: "247 W 38th St, New York, NY 10018",
  licenseNumber: "Lic. #014729",
  yearEstablished: 2015,
  hoursOfOperation: "Mon-Fri: 7am - 6pm | Sat: 8am - 2pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    googleRating: 4.8,
    googleReviewCount: 212,
    yearsInBusiness: 11,
    credential: "Master Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Complete home wiring, rewiring, and electrical upgrades for apartments, brownstones, and condos.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Office, retail, and restaurant electrical installations, fit-outs, and maintenance.",
      icon: "Building2",
    },
    {
      title: "24/7 Emergency",
      description:
        "Power outages, sparking outlets, tripped breakers. We come to you fast, day or night.",
      icon: "Siren",
    },
    {
      title: "Panel Upgrades",
      description:
        "Replace outdated electrical panels with modern, code-compliant breaker boxes and safety switches.",
      icon: "PlugZap",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified installation of home and commercial electric vehicle charging stations.",
      icon: "BatteryCharging",
    },
    {
      title: "Lighting Design",
      description:
        "LED upgrades, recessed lighting, outdoor lighting, and smart lighting systems.",
      icon: "Lightbulb",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "With over a decade serving New York City, Adam Smith Electrical is built on honest work and fair pricing. Every job is completed by a licensed, insured electrician who treats your property like his own. From Manhattan high-rises to Brooklyn brownstones, no job is too big or too small.",
    image: null, // Replace with actual image path e.g. "/images/team.jpg"
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    businessName: "Adam Smith Electrical",
    rating: 4.8,
    totalReviews: 212,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=PLACE_ID",
    items: [
      {
        author: "Mike Ramirez",
        rating: 5,
        date: "2 months ago",
        text: "Adam rewired our entire pre-war apartment in the Upper West Side. Professional, on time, and left the place spotless. Couldn't recommend him more.",
        avatar: null,
      },
      {
        author: "Jennifer Liu",
        rating: 5,
        date: "3 months ago",
        text: "Called at 11pm when our power went out in the middle of summer. Adam was there within 30 minutes and had everything fixed fast. A lifesaver.",
        avatar: null,
      },
      {
        author: "Carlos Vega",
        rating: 5,
        date: "5 months ago",
        text: "Had an EV charger installed in our parking garage in Midtown. Fair price, clean work, and he explained everything clearly. Very knowledgeable.",
        avatar: null,
      },
      {
        author: "Rachel Kim",
        rating: 5,
        date: "1 month ago",
        text: "Upgraded the old panel in our Brooklyn brownstone. Quote was spot-on, no surprises, and the work was done in half a day. Will definitely use again.",
        avatar: null,
      },
      {
        author: "Dan O'Brien",
        rating: 4,
        date: "6 months ago",
        text: "Great job on our restaurant lighting in the East Village. Only reason for 4 stars is scheduling took a bit, but the actual work was excellent.",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Bronx",
      "Staten Island",
      "Midtown",
      "Upper West Side",
      "Upper East Side",
      "East Village",
      "West Village",
      "SoHo",
      "Tribeca",
      "Williamsburg",
      "Park Slope",
      "Astoria",
      "Long Island City",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency Call-Out",
      "Panel Upgrade",
      "EV Charger Installation",
      "Lighting",
      "Other",
    ],
    recipientEmail: "adam@adamsmithelectrical.com",
  },
};

export default siteConfig;
