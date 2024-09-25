import { test, expect } from "@playwright/test";

test("User should be able to expand and see detail information about a horse", async ({
  page,
}) => {
  await page.goto("/v86");
  await page.getByTestId("2024-09-18_5_7").click();
  await page.getByTestId("778382").click();

  const data = [
    {
      id: "778382",
      trainer: "Daniel Wäjersten",
      father: "Googoo Gaagaa",
    },
    {
      id: "778677",
      trainer: "Staffan Lind",
      father: "Tobin Kronos",
    },
  ];

  for (let i = 0; i < data.length; i++) {
    await expect(page.getByTestId(`${data[i].id}-trainer`)).toHaveText(
      data[i].trainer
    );
    await expect(page.getByTestId(`${data[i].id}-father`)).toHaveText(
      data[i].father
    );
  }
});
