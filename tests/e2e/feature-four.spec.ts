import { test, expect } from "@playwright/test";
import v86Products from "../mock-data/v86/product";
import v86Games from "../mock-data/v86/games";

test("User should be able to expand and see detail information about a horse", async ({
  page,
}) => {
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

  const data = v86Games.races[1];
  await page.getByTestId(data.id).click();
  await page.getByTestId(data.starts[1].horse.id + "").click();
  await expect(
    page.getByTestId(`${data.starts[1].horse.id}-trainer`)
  ).toHaveText(
    `${data.starts[1].horse.trainer.firstName}  ${data.starts[1].horse.trainer.lastName}`
  );
  await expect(
    page.getByTestId(`${data.starts[1].horse.id}-father`)
  ).toHaveText(data.starts[1].horse.pedigree.father.name);
});
