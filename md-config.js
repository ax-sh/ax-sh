module.exports = {
  stylesheet: [
    // "path/to/style.css",

    "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css",
    // "https://cdn.jsdelivr.net/npm/tailwindcss@4.0.7/index.min.css"
    // "https://example.org/stylesheet.css",
  ],
  css: `
  body { color: tomato; } 
  ul{margin-bottom:5mm} 
  p{margin-bottom:8px}`,
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    //   format: "A4",
    margin: "10mm",
    //   printBackground: true,
  },
  stylesheet_encoding: "utf-8",
};
