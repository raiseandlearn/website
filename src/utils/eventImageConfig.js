/**
 * Event Image Configuration
 * Maps article IDs to their visual template properties
 */

export const EVENT_IMAGE_CONFIG = {
  1: {
    abbreviation: 'KAR',
    month: 'FEB',
    theme: 'purple',
  },
  2: {
    abbreviation: 'MOM',
    month: 'FEB',
    theme: 'pink',
  },
  3: {
    abbreviation: 'BBQ',
    month: 'JAN',
    theme: 'orange',
  },
  4: {
    abbreviation: 'BOK',
    month: 'JAN',
    theme: 'blue',
  },
};

/**
 * Get event image configuration by article ID
 * @param {number} articleId - The article ID
 * @returns {Object} Configuration object with abbreviation, month, and theme
 */
export const getEventImageConfig = (articleId) => {
  return EVENT_IMAGE_CONFIG[articleId] || {
    abbreviation: 'EVT',
    month: 'JAN',
    theme: 'purple',
  };
};

/**
 * Parse date string to month abbreviation
 * @param {string} dateString - Date in format "Month DD, YYYY"
 * @returns {string} 3-letter month abbreviation
 */
export const getMonthFromDate = (dateString) => {
  const monthMap = {
    January: 'JAN',
    February: 'FEB',
    March: 'MAR',
    April: 'APR',
    May: 'MAY',
    June: 'JUN',
    July: 'JUL',
    August: 'AUG',
    September: 'SEP',
    October: 'OCT',
    November: 'NOV',
    December: 'DEC',
  };

  const month = dateString.split(' ')[0];
  return monthMap[month] || 'JAN';
};
