import { test, expect } from "@playwright/test";
import v86Products from "../mock-data/v86/product";
import v86Games from "../mock-data/v86/games";

test("User should be able to see information about races", async ({ page }) => {
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
  await page.goto("/v86");

  const [first, second] = await Promise.all([
    page.getByTestId("2024-09-25_5_7"),
    page.getByTestId("2024-09-25_5_8"),
  ]);

  await expect(first).toHaveText(
    "# 7Stall Courant Solvallaserien 150, Fördel Ston (Försök 6 i Meeting 3 - Final Solvalla 23 oktober)20:41"
  );

  await expect(second).toContainText(
    "# 8Customs B-tränarserie - Omgång 621:03"
  );
});
