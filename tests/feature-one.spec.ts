import { test, expect } from "@playwright/test";
import v86Products from "./mock-data/v86/product";
import v86Games from "./mock-data/v86/games";

test.beforeEach(async ({ page }) => {
  await page.route("**/racinginfo/v1/api/products/*", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify(v86Products),
    });
  });
  await page.route("**/racinginfo/v1/api/games/*", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify(v86Games),
    });
  });
});
test("User selecting a bet type should see the bet type page", async ({
  page,
}) => {
  await page.goto("/");
  const select = page.locator('select[name="betType"]');
  await select.selectOption("V86");
  const submitBtn = page.getByRole("button", { name: "Visa resultat" });
  expect(submitBtn).not.toBeDisabled();
  await submitBtn.click();

  expect(page.url()).toContain("V86");
});

test("User should be able to see a bet types recent results", async ({
  page,
}) => {
  await page.goto("/v86");

  await expect(
    page.getByRole("heading", { name: "Resultat av: V86" })
  ).toBeVisible();

  const [trackOne, trackTwo] = await Promise.all([
    page.getByTestId("track-info-Solvalla"),
    page.getByTestId("track-info-Åby"),
  ]);

  await expect(trackOne).toHaveText("Solvalla-20:30");
  await expect(trackTwo).toHaveText("Åby-20:30");
});
