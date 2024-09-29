import { test, expect } from "@playwright/test";
import { scraper } from "../src/scraper";

const hypothesis = true;

// Make sure tests run in serial mode, so if we write to a database, we know the order of operations
test.describe.configure({ mode: "serial" });
// Run indefinitely
test.setTimeout(0);

test("Scrape data", async ({ page }) => {
  await scraper(page, 5);

  setTimeout(async () => {
    await scraper(page, 6);
  }, 30000)

  expect(hypothesis).toBe(true);
});
