import { test, expect } from "@playwright/test";

test("home page loads with starter content", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("img", { name: "Next.js logo" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /to get started, edit the/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Deploy Now" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
});
