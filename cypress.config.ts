import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8788',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
