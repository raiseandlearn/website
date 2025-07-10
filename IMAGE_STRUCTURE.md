# Image Structure Documentation

## Overview
This document describes the image structure and management system for the Raise & Learn website.

## Directory Structure
```
src/
├── assets/
│   └── images/
│       ├── mission/        # Mission section images
│       │   └── mission-bg.svg # Main mission background image
│       ├── landing/        # Landing page specific images
│       └── [other-sections]/
└── constants/
    └── images.js          # Image path constants
```

## Image Categories

### Mission Section (`/src/assets/images/mission/`)
- `mission-bg.svg` - Main mission background image (currently a placeholder SVG)
- Future additions: alternative backgrounds, mission illustrations

### Landing Page (`/src/assets/images/landing/`)
- Reserved for landing page specific images
- Examples: feature images, testimonial backgrounds, etc.

## Usage

### Importing Images
```javascript
import { IMAGES, getImagePath } from '../constants/images';

// Direct access
const missionImage = IMAGES.mission.background;

// Using helper function
const missionImage = getImagePath('mission', 'background');
```

### Adding New Images
1. Place the image file in the appropriate category folder
2. Update the `IMAGES` object in `/src/constants/images.js`
3. Use the image in your component

### Example Usage in Component
```jsx
import { IMAGES } from '../constants/images';

const MyComponent = () => {
  return (
    <img 
      src={IMAGES.mission.background} 
      alt="Mission Background" 
      className="mission-bg-image"
    />
  );
};
```

## Best Practices

1. **File Naming**: Use descriptive, kebab-case names
2. **Formats**: Use appropriate formats (SVG for icons, JPG/PNG for photos)
3. **Optimization**: Compress images before adding to project
4. **Alt Text**: Always provide meaningful alt text for accessibility
5. **Responsive**: Consider different sizes for different screen sizes

## Replacing the Placeholder
To replace the placeholder mission background:
1. Add your image to `/src/assets/images/mission/`
2. Update the path in `/src/constants/images.js`
3. Ensure the image is optimized for web use

## Current Implementation
The mission section now includes:
- Background image support
- Proper z-index layering
- Responsive design
- Accessibility features
- Action buttons (Start Learning, Learn More)
