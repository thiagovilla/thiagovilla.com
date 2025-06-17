# Content

Use the filesystem for content. For now.

TO DO: remove when all external source plugins are restored.

## Development

Run `npm run develop` to run locally.

Run the command below to source the Dropbox env vars:

```shell
export $(grep "^DROPBOX_" .env | xargs)
```

# Source Plugins

This website uses the following external source plugins:

- [DatoCMS](#datocms)

## DatoCMS

DatoCMS is a cloud Content Management System.

**Content**: `Page` generic model (home page, about me, etc.).

**Docs Link:** https://www.gatsbyjs.com/plugins/gatsby-source-datocms/

**File/Folder Structure:** This is a cloud CMS plugin and therefore there is no file/folder structure.

**Prod/Draft Config:** Set `previewMode: true` in `gatsby-config.js` to render draft content.

**Auth:** Set `apiToken` to an API token from the Dato configuration panel.

**Page Creation:** Use collection routes with the `Page` model `slug` field.

The `/` slug ony renders to index _if_ there is no `index.js` file.

## Google Docs

**Content:** This plugin will be used to store blog posts (`/blog`).

**Docs Link:** https://www.gatsbyjs.com/plugins/gatsby-source-google-docs

**File/Folder Structure:** `published` and `draft` folders with `skip: true` to skip in slug.

**Prod/Draft Config:** Set `folder` to the `published` folder ID in production or to the **root folder** (not `draft`) otherwise.

**Auth:** Follow the plugin documentation for access token generation instructions.

**Page Creation:** Set `createPages: true` in `gatsby-config.js`.

## Dropbox

**Content:** `/docs` section with reference files, code snippets, and book summaries.

**Docs Link:** https://www.gatsbyjs.com/plugins/gatsby-source-dropbox/

**File/Folder Structure:** Markdown files stored in `/docs`. Slugs derive from file paths.

**Prod/Draft Config:**
- Uses two root-level folders: `published__SKIP__` and `draft__SKIP__`.
- In the draft environment, the path config parameter is set to `""` (root folder).
- In production, the path config parameter is set to `"published__SKIP__"`.
- The Gatsby Node API strips folders matching `/\w+__SKIP__\//` from slugs.

**Auth:**
- A Refresh Token must be generated manually using Dropbox OAuth2 (`authorization_code` flow).
  - Run `npm run dropbox:oauth2` to get the refresh token.
- The refresh token is stored in `DROPBOX_REFRESH_TOKEN`.
- A shell script (`scripts/get-dropbox-access-token.sh`) retrieves a new access token dynamically.
- The build script sets `DROPBOX_ACCESS_TOKEN=$(./scripts/get-dropbox-access-token.sh)`.
- gatsby-config.js checks for an empty `DROPBOX_ACCESS_TOKEN` to prevent build failures.

**Page Creation:**
- Uses `templates/dropbox.js` with the Main Layout (see [gatsby-node.js]).
- Index Pages: If a subdirectory `/my/subdirectory` exists, its index page should be a markdown file named after the subdirectory at the same level (`/my/subdirectory.md`).

**Remark Plugin:**
- Dropbox Source Plugin (DSP) requires gatsby-transformer-remark (GTR) to transform Markdown.
- This website uses Gatsby 4 (TODO: why?), which only supports Remark 5.
- GTR requires gatsby-source-filesystem (GSF). Gatsby 4 only supports GSF 4.
- GTR must [come after](https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/#field-image-must-not-have-a-selection-since-type-string-has-no-subfields) DSP in gatsby-config.js or it errors out a type error.

# Transformer Plugins

**gatsby-transformer-remark:** parses markdown into HTML. Required by: Google Docs. Version 6 requires Gatsby 5. Use version 5 with Gatsby 4.

# Plugin Upgrades Needed

As of 05/19/25 (Talc V3 - blog), using older versions due to Gatsby 4 compatibility. Required for MD files and blog images. Update when
moving to Gatsby 5:

`gatsby-transformer-remark`: 5 -> 7
`gatsby-remark-images`: 6 -> 7
`gatsby-plugin-sharp`: 4 -> 6
`gatsby-transformer-sharp`: 4 -> 5

As of 05/26/25 (Talc V5 - FAQs). Required for FAQ JSON file.

`gatsby-transformer-json`: 4 -> 5

As of 05/27/25 (Talc V6 - YAML projects).

`gatsby-transformer-yaml`: 4 -> 5

As of 06/17/25 (Talc V7 - React common questions blog post).

`gatsby-remark-prismjs`: 6 -> 7 (syntax highlighting)
`gatsby-remark-autolink-headers:` 5 -> 6 (heading IDs)
