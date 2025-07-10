// Image constants for the application
export const IMAGES = {
  mission: {
    background: '/src/assets/images/mission/mission-bg.svg',
    // Add more mission images as needed
    // backgroundAlt: '/src/assets/images/mission/mission-bg-alt.jpg',
  },
  landing: {
    // Add landing page specific images
    // feature1: '/src/assets/images/landing/feature-1.jpg',
    // feature2: '/src/assets/images/landing/feature-2.jpg',
    // testimonial: '/src/assets/images/landing/testimonial-bg.jpg',
  },
  events: {
    event1: '/src/assets/images/events/event-1.svg',
    event2: '/src/assets/images/events/event-2.svg',
    event3: '/src/assets/images/events/event-3.svg',
    event4: '/src/assets/images/events/event-4.svg',
  },
  // Add more image categories as needed
  // about: {},
  // contact: {},
};

// Helper function to get image path
export const getImagePath = (category, imageName) => {
  return IMAGES[category]?.[imageName] || '';
};
