import { test, expect } from "@playwright/test";

test("User selecting a bet type should see the bet type page", async ({
  page,
}) => {
  await page.goto("/");
  const select = page.locator('select[name="betType"]');
  await select.selectOption("V75");
  const submitBtn = page.getByRole("button", { name: "Visa resultat" });
  expect(submitBtn).not.toBeDisabled();
  await submitBtn.click();

  expect(page.url()).toContain("V75");
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
    page.getByTestId("track-info-Jägersro"),
  ]);

  await expect(trackOne).toHaveText("Solvalla-20:30");
  await expect(trackTwo).toHaveText("Jägersro-20:30");
});
