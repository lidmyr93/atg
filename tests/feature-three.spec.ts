import { test, expect } from "@playwright/test";

test("User should be able to expand a race and see horse & trainer information", async ({
  page,
}) => {
  await page.goto("/v86");

  await page.getByTestId("2024-09-18_5_7").click();

  const data = [
    {
      id: "778382",
      postPosition: "1",
      name: "Zigzag Zagazoo",
      driver: "Daniel Wäjersten",
    },
    {
      id: "778677",
      postPosition: "2",
      name: "Whoopsy Laday",
      driver: "Christian Lind",
    },
  ];

  for (let i = 0; i < data.length; i++) {
    await expect(page.getByTestId(`${data[i].id}-postPosition`)).toHaveText(
      data[i].postPosition
    );
    await expect(page.getByTestId(`${data[i].id}-name`)).toHaveText(
      data[i].name
    );
    await expect(page.getByTestId(`${data[i].id}-driver`)).toHaveText(
      data[i].driver
    );
  }
});
