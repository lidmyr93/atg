import { test, expect } from "@playwright/test";
import v86Products from "../mock-data/v86/product";
import v86Games from "../mock-data/v86/games";

test("User should be able to expand a race and see horse & trainer information", async ({
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

  await page.getByTestId("2024-09-25_5_7").click();

  const data = [v86Games.races[0].starts[0], v86Games.races[0].starts[1]];

  for (let i = 0; i < data.length; i++) {
    await expect(
      page.getByTestId(`${data[i].horse.id}-postPosition`)
    ).toHaveText(`${data[i].postPosition}`);
    await expect(page.getByTestId(`${data[i].horse.id}-name`)).toHaveText(
      data[i].horse.name
    );
    await expect(page.getByTestId(`${data[i].horse.id}-driver`)).toHaveText(
      `${data[i].driver.firstName} ${data[i].driver.lastName}`
    );
  }
});
