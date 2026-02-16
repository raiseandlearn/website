import React from 'react';

// Color themes for different events
const COLOR_THEMES = {
  purple: {
    background: '#667EEA',
    overlay: '#5A67D8',
    circle: '#E53E3E',
  },
  green: {
    background: '#48BB78',
    overlay: '#38A169',
    circle: '#E53E3E',
  },
  blue: {
    background: '#4299E1',
    overlay: '#3182CE',
    circle: '#E53E3E',
  },
  orange: {
    background: '#ED8936',
    overlay: '#DD6B20',
    circle: '#E53E3E',
  },
  pink: {
    background: '#ED64A6',
    overlay: '#D53F8C',
    circle: '#E53E3E',
  },
  teal: {
    background: '#38B2AC',
    overlay: '#319795',
    circle: '#E53E3E',
  },
  indigo: {
    background: '#5A67D8',
    overlay: '#4C51BF',
    circle: '#E53E3E',
  },
  red: {
    background: '#F56565',
    overlay: '#E53E3E',
    circle: '#742A2A',
  },
};

/**
 * EventImageTemplate - Dynamic SVG-based event image generator
 *
 * @param {string} abbreviation - 3-letter abbreviation for the event (e.g., "KAR" for Karaoke)
 * @param {string} month - 3-letter month abbreviation (e.g., "FEB", "MAR")
 * @param {string} theme - Color theme name (purple, green, blue, orange, pink, teal, indigo, red)
 * @param {string} title - Optional full title text
 * @param {number} width - Optional width (default: 400)
 * @param {number} height - Optional height (default: 300)
 */
const EventImageTemplate = ({
  abbreviation = 'EVT',
  month = 'JAN',
  theme = 'purple',
  title = '',
  width = 400,
  height = 300,
  className = '',
  style = {}
}) => {
  const colors = COLOR_THEMES[theme] || COLOR_THEMES.purple;
  const displayText = title || abbreviation;

  // Dynamically adjust font size based on text length
  const getFontSize = (text) => {
    const length = text.length;
    if (length <= 3) return '28px';
    if (length <= 10) return '22px';
    if (length <= 20) return '18px';
    return '14px';
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Background */}
      <rect width="400" height="300" fill={colors.background}/>

      {/* Overlay rectangle */}
      <rect x="50" y="100" width="300" height="100" fill={colors.overlay} rx="10"/>

      {/* Main text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontSize={getFontSize(displayText)}
        fontWeight="bold"
      >
        {displayText}
      </text>

      {/* Month circle */}
      <circle cx="350" cy="50" r="30" fill={colors.circle}/>

      {/* Month text */}
      <text
        x="350"
        y="50"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontSize="12px"
        fontWeight="bold"
      >
        {month.toUpperCase().substring(0, 3)}
      </text>
    </svg>
  );
};

// Helper function to generate event image data URL
export const generateEventImageURL = (abbreviation, month, theme) => {
  const colors = COLOR_THEMES[theme] || COLOR_THEMES.purple;

  // Dynamically adjust font size based on text length
  const getFontSize = (text) => {
    const length = text.length;
    if (length <= 3) return '28px';
    if (length <= 10) return '22px';
    if (length <= 20) return '18px';
    return '14px';
  };

  const fontSize = getFontSize(abbreviation);

  const svg = `
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="${colors.background}"/>
      <rect x="50" y="100" width="300" height="100" fill="${colors.overlay}" rx="10"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold">
        ${abbreviation}
      </text>
      <circle cx="350" cy="50" r="30" fill="${colors.circle}"/>
      <text x="350" y="50" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="12px" font-weight="bold">
        ${month.toUpperCase().substring(0, 3)}
      </text>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Export color themes for external use
export { COLOR_THEMES };

export default EventImageTemplate;
