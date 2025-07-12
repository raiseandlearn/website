// Image constants for the application
export const IMAGES = {
  mission: {
    background: '/assets/images/mission/mission-bg.svg',
    // Add more mission images as needed
    // backgroundAlt: '/assets/images/mission/mission-bg-alt.jpg',
  },
  landing: {
    // Add landing page specific images
    // feature1: '/assets/images/landing/feature-1.jpg',
    // feature2: '/assets/images/landing/feature-2.jpg',
    // testimonial: '/assets/images/landing/testimonial-bg.jpg',
  },
  events: {
    event1: '/assets/images/events/event-1.svg',
    event2: '/assets/images/events/event-2.svg',
    event3: '/assets/images/events/event-3.svg',
    event4: '/assets/images/events/event-4.svg',
  },
  // Add more image categories as needed
  // about: {},
  // contact: {},
};

// Helper function to get image path
export const getImagePath = (category, imageName) => {
  return IMAGES[category]?.[imageName] || '';
};
