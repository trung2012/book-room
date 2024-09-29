import { Page } from "@playwright/test";

export const scraper = async (page: Page, day: number = 5) => {
  await page.goto("https://www.locurio.com/book/");

  await page.waitForTimeout(5000);

  const iframe = page.frameLocator("#resova-iframe");

  await iframe
    .getByText(/Book now/i)
    .first()
    .click();

  await iframe.locator(".filtersMenuDateSelect").click();

  await iframe.locator(".nextmonth").nth(2).click();

  const calendar = iframe.locator(".resovaCalendarTimeSlotsOnly");

  const row = calendar.locator("tbody").nth(2);

  const cell = row.locator("td").nth(day - 1);
  await cell.click();

  await iframe.getByText(/Continue/i).click();
};
