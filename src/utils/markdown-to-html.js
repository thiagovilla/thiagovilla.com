/**
 * Simple Markdown to HTML converter
 * Handles basic Markdown syntax: bold, italic, links, and line breaks
 * @param {string} markdown - Markdown text to convert
 * @return {string} - HTML string
 */
function markdownToHtml(markdown) {
  if (!markdown) return "";
  
  let html = markdown;

  // Convert line breaks: \n\n -> <br /> if preserveLineBreaks is true 
    html = html.replace(/\n\n/g, "<br /><br />");

  // Convert bold: **text** -> <strong>text</strong>
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Convert italic: *text* -> <em>text</em>
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Convert links: [text](url) -> <a href="url">text</a>
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, "<a href=\"$2\">$1</a>");

  return html;
}

export default markdownToHtml;
