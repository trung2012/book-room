import { test, expect } from "@playwright/test";
import { scraper } from "../src/scraper";

const hypothesis = true;

test("Scrape data", async ({ page }) => {
  await scraper(page, 5);
  expect(hypothesis).toBe(true);
});

test("Scrape data 2", async ({ page }) => {
  await scraper(page, 6);
  expect(hypothesis).toBe(true);
});
