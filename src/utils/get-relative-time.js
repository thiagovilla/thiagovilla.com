/**
 * Converts a date to a relative time string
 * @param {Date|String|Number} date - The date to convert
 * @returns {String} Relative time string
 */
const getRelativeTime = (date) => {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_WEEK = 604800;
  const SECONDS_IN_MONTH = 2592000;
  const SECONDS_IN_YEAR = 31536000;

  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

  if (seconds < SECONDS_IN_MINUTE) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (seconds < SECONDS_IN_HOUR) {
    const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (seconds < SECONDS_IN_DAY) {
    const hours = Math.floor(seconds / SECONDS_IN_HOUR);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (seconds < SECONDS_IN_WEEK) {
    const days = Math.floor(seconds / SECONDS_IN_DAY);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (seconds < SECONDS_IN_MONTH) {
    const weeks = Math.floor(seconds / SECONDS_IN_WEEK);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (seconds < SECONDS_IN_YEAR) {
    const months = Math.floor(seconds / SECONDS_IN_MONTH);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(seconds / SECONDS_IN_YEAR);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};

export default getRelativeTime;
