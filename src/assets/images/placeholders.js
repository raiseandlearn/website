// Example placeholder images for future use
// These are SVG placeholders that can be replaced with actual images

// Feature section placeholder
export const featurePlaceholder = `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#f8f9fa"/>
  <rect x="50" y="50" width="300" height="200" fill="#e9ecef" rx="8"/>
  <circle cx="200" cy="120" r="30" fill="#6c757d"/>
  <rect x="120" y="170" width="160" height="8" fill="#6c757d" rx="4"/>
  <rect x="150" y="190" width="100" height="8" fill="#6c757d" rx="4"/>
</svg>
`;

// Testimonial background placeholder
export const testimonialPlaceholder = `
<svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="testimonialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e9ecef;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#testimonialGradient)"/>
  <circle cx="600" cy="100" r="40" fill="rgba(108,117,125,0.1)"/>
  <circle cx="200" cy="320" r="60" fill="rgba(108,117,125,0.08)"/>
  <path d="M0,200 Q200,120 400,200 T800,200 L800,400 L0,400 Z" fill="rgba(108,117,125,0.05)"/>
</svg>
`;

// Usage example:
// To create actual image files from these placeholders:
// 1. Save the SVG content to a .svg file
// 2. Or convert to PNG/JPG using an image editor
// 3. Update the IMAGES constant in images.js
