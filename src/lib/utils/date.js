/**
 * Date utility functions
 */

/**
 * Format a date to a human-readable string
 * @param {Date|string} date - Date object or ISO string
 * @param {Object} options - Formatting options
 * @param {string} options.format - Format type ('short', 'long', 'relative')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, { format = 'short' } = {}) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date provided to formatDate:', date);
    return 'Invalid date';
  }
  
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString();
    case 'long':
      return dateObj.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    case 'relative':
      return getRelativeTimeString(dateObj);
    default:
      return dateObj.toLocaleDateString();
  }
};

/**
 * Get relative time string (e.g., "2 days ago")
 * @param {Date} date - Date to compare against now
 * @returns {string} Relative time string
 */
export const getRelativeTimeString = (date) => {
  const now = new Date();
  const diffInMs = now - date;
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInSecs < 60) return 'just now';
  if (diffInMins < 60) return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`;
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  
  return formatDate(date, { format: 'short' });
};

/**
 * Get a formatted time string (HH:MM)
 * @param {Date|string} date - Date object or ISO string
 * @returns {string} Formatted time string
 */
export const formatTime = (date) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date provided to formatTime:', date);
    return 'Invalid time';
  }
  
  return dateObj.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Add days to a date
 * @param {Date} date - Original date
 * @param {number} days - Number of days to add (can be negative)
 * @returns {Date} New date object
 */
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
