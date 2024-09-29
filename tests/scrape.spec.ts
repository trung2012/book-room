import { test } from "@playwright/test";
import { scraper } from "../src/scraper";

test("Scrape data", async ({ page }) => {
  await scraper(page, 5);
});

test("Scrape data 2", async ({ page }) => {
  await scraper(page, 6);
});
