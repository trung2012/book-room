import { test, expect } from "@playwright/test";
import { scraper } from "../src/scraper";

const hypothesis = true;

test("Scrape data", async ({ page }) => {
  await scraper(page, 5);

  setTimeout(async () => {
    await scraper(page, 6);
  }, 10000);

  expect(hypothesis).toBe(true);
});
