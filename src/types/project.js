/**
 * @typedef {Object} ProjectMedia
 * @property {string} url - URL to the media resource
 * @property {string} title - Title of the media
 * @property {string} description - Description of the media
 */

/**
 * @typedef {Object} Project
 * @property {string} slug - Unique identifier for the project
 * @property {string} title - Project title
 * @property {string} excerpt - Short markdown-formatted description for cards and previews
 * @property {string} description - Full markdown-formatted project description
 * @property {string[]} skills - List of skills used in the project
 * @property {string[]} techStack - List of technologies used in the project
 * @property {ProjectMedia[]} media - List of media items associated with the project
 */

module.exports = {};
