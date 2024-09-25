import { test, expect } from "@playwright/test";

test("User should be able to see information about races", async ({ page }) => {
  await page.goto("/v86");

  const [first, second] = await Promise.all([
    page.getByTestId("2024-09-18_5_7"),
    page.getByTestId("2024-09-18_5_8"),
  ]);

  await expect(first).toContainText("7");
  await expect(first).toContainText(
    "Stall Courant Solvallaserien 350, Fördel Ston (Försök 5 i Meeting 3 - Final Solvalla 23 oktober)"
  );
  await expect(first).toContainText("20:41");

  await expect(second).toContainText("8");
  await expect(second).toContainText(
    "Lärlingslopp - Guldklockan 2024, Försök 11 - Spårtrappa"
  );
  await expect(second).toContainText("21:04");
});
