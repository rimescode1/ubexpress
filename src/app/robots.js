export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.ubxexpress.com/sitemap.xml",
    host: "https://www.ubxexpress.com",
  };
}
