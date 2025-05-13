# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to the Mohs hardness scale for versioning, starting with Talc (hardness 1).

## [Unreleased] - [Talc 2]

### Removed
- External source plugins (DatoCMS, Google Docs, Dropbox) for May 2025 EOM launch
  - All content will be sourced from the filesystem for simplicity
  - External plugins slow down development flow, require complex configuration, and don't add value for initial launch
- Template files for blog and Dropbox content
  - Removed `src/templates/blog.js` and `src/templates/dropbox.js`
  - No longer needed as content is sourced from filesystem
- Cleaned up `gatsby-config.js`
  - Removed `DRAFT_ENV` variable and debug output
  - Removed `DROPBOX_ACCESS_TOKEN` environment variable check
  - Removed commented-out source plugin configuration code
- Removed `gatsby-node.js` file
  - No longer needed as we're not using any custom page creation logic

### Changed
- Moved Dropbox token scripts to separate `npm` commands instead of being part of standard develop/build scripts

### Added
- Brand styling improvements
  - Added Galano Grotesque font family with standardized naming convention
    - Created `/static/fonts` directory for font files
    - Renamed font files to simplified format: `galano-regular.woff2`, `galano-semibold.woff2`, etc.
    - Included Regular (400), SemiBold (600), and Bold (700) weights for optimal performance
    - Added proper font-display settings for improved loading experience
  - Implemented brand colors as CSS variables for consistent usage:
    - Navy blue (`#1F3040`) - Primary brand color for headings and important elements
    - Royal blue (`#5E82B8`) - Secondary color for interactive elements and accents
    - Orange (`#E57D33`) - Accent color for calls to action and hover states
  - Enhanced typography system
    - Improved base font size and line height for better readability
    - Added proper heading hierarchy with consistent sizing and spacing
    - Enabled font-smoothing for cleaner text rendering across browsers
    - Added custom text selection styling using brand colors
  - Comprehensive UI component updates
    - Redesigned buttons with brand colors and improved hover effects
    - Added subtle animations to interactive elements for better feedback
    - Updated form elements with consistent styling and focus states
    - Redesigned service and feature cards with improved visual hierarchy
    - Updated content headers with brand-consistent styling
    - Enhanced footer with brand colors and improved spacing
  - Improved responsive behavior and consistency across viewports
  - Added themed promo bar with brand-consistent styling

  ## [Talc 1] - 2024-10-04
  
  ### Added
  - Created initial `CHANGELOG.md` file
  - Website with basic functionality

### Removed
- All external source plugins and associated/unused code

### Changed
- Switched to filesystem content source