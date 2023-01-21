import GhostContentAPi from "@tryghost/content-api";

// Create API instance with site credentials

export const ghostClient = new GhostContentAPi({
  // This is the default URL if your site is running on a local environment
  url: import.meta.env.DEV_API_URL,
  key: import.meta.env.CONTENT_API_KEY,
  version: "v5.0",
});
