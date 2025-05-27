/**
 * Simple markdown to HTML converter for FAQ answers
 * Handles basic Markdown syntax: bold, italic, and links only
 * @param {string} markdown - Markdown text to convert
 * @return {string} - HTML string
 */
function markdownToHtml(markdown) {
  if (!markdown) return "";

  // Convert bold: **text** -> <strong>text</strong>
  let html = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Convert italic: *text* -> <em>text</em>
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Convert links: [text](url) -> <a href="url">text</a>
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, "<a href=\"$2\">$1</a>");

  return html;
}

export default markdownToHtml;
