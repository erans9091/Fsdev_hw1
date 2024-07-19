import { test, expect } from "@playwright/test";
import { fetchPage } from "@/src/utils/fetchUtils";

test.describe("notes", () => {
  test("have note", async ({ page }) => {
    await page.goto("http://localhost:3000"); // Change the URL to your app's login page
    //await page.waitForResponse((response) => response.url().includes('http://localhost:3001/notes'))
    const notesList = page.locator(".note");
    await expect(notesList).not.toHaveCount(0);

    await page.click("button[name='next']");
    const notesList2 = page.locator(".note");
    await expect(notesList2).not.toHaveCount(0);
  });

  test("Check if edit and delete not show", async ({ page }) => {
    // Navigate to the page where the component should not be
    await page.goto("http://localhost:3000"); // Change to the URL of your app

    // Check if the component does not exist
    const component1 = page.locator('[name^="edit-"]'); // Use ^= to match the start of the name attribute
    await expect(component1).toHaveCount(0);
    const component2 = page.locator('[name^="delete-"]'); // Use ^= to match the start of the name attribute
    await expect(component2).toHaveCount(0);
  });
  test("add post (cannot run multiple times in parallel)", async ({ page }) => {
    await page.goto("http://localhost:3000"); // Change the URL to your app's login page

    const totalCountBefore = +(await fetchPage(1)).headers["x-total-count"];
    let totalCountAfter: number | undefined;
    let setBefore = false;

    page.on("response", async (response) => {
      if (response.url().includes("http://localhost:3001/notes")) {
        const headers = response.headers();
        if (headers["x-total-count"]) {
          totalCountAfter = parseInt(headers["x-total-count"]);
        }
      }
    });

    // Fill out the login form
    await page.fill('input[name="login_form_username"]', "testuser");
    await page.fill('input[name="login_form_password"]', "Password123!");
    //click - send login request
    await page.click('button[name="login_form_btn"]');
    const response = await page.waitForResponse("http://localhost:3001/login");

    expect(response.status()).toBe(200);

    await page.click("button[name='add_new_note']");
    await page.fill('input[name="text_input_title_new_note"]', "test_post");
    await page.fill('input[name="text_input_new_note"]', "test post data");

    // Click the save button - send post request
    await page.click('button[name="text_input_save_new_note"]');

    // Verify that the status is 201
    const response1 = await page.waitForResponse((response) => {
      return (
        response.url() === "http://localhost:3001/notes" &&
        response.status() === 201
      );
    });

    // make sure all the responses are resolved so total count is updated for sure
    await page.waitForResponse((response) => {
      return response.url().includes("http://localhost:3001/notes");
    });

    expect(response1.status()).toBe(201);
    const totalNotesBefore = totalCountBefore ? totalCountBefore : -1;
    expect(totalNotesBefore + 1).toBe(totalCountAfter);
    //jump to last page
    await page.click("button[name='last']");
    //await page.waitForResponse((response) => response.url().includes('http://localhost:3001/notes'))
    const lastNote = page.locator(".note").last().locator(".auther_name");
    await expect(lastNote).toHaveText("user1");
  });
});

test.describe("Signup and Login", () => {
  test("User can signup", async ({ page }) => {
    // Navigate to the signup page
    await page.goto("http://localhost:3000"); // Change the URL to your app's signup page

    // Fill out the signup form
    await page.fill('input[name="create_user_form_username"]', "testuser");
    await page.fill(
      'input[name="create_user_form_email"]',
      "testuser@example.com"
    );
    await page.fill('input[name="create_user_form_password"]', "Password123!");
    await page.fill('input[name="create_user_form_name"]', "user1");

    let responseStatus: number | undefined;
    page.on("response", (response) => {
      if (response.url() === "http://localhost:3001/users") {
        responseStatus = response.status();
      }
    });

    // Click the signup button
    await page.click('button[name="create_user_form_create_user"]');

    // Wait for the response to be captured
    await page.waitForResponse((response) => response.url().includes("users"));

    // Check for status 201
    expect(responseStatus).toBe(201);
  });

  test("User can login", async ({ page }) => {
    // Navigate to the login page
    await page.goto("http://localhost:3000"); // Change the URL to your app's login page

    // Fill out the login form
    await page.fill('input[name="login_form_username"]', "testuser");
    await page.fill('input[name="login_form_password"]', "Password123!");

    await page.click('button[name="login_form_btn"]');
    const response = await page.waitForResponse("http://localhost:3001/login");

    // Read and verify the response
    const responseBody = await response.json();

    // Perform assertions on the response
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("token"); // Example assertion, adjust based on your actual response
    expect(responseBody).toHaveProperty("name");
    expect(responseBody).toHaveProperty("email");
  });
});

test("User can logout", async ({ page }) => {
  await page.goto("http://localhost:3000"); // Change the URL to your app's login page
  // Fill out the login form
  await page.fill('input[name="login_form_username"]', "testuser");
  await page.fill('input[name="login_form_password"]', "Password123!");

  await page.click('button[name="login_form_btn"]');
  const response = await page.waitForResponse("http://localhost:3001/login");

  // Read and verify the response

  // Perform assertions on the response
  expect(response.status()).toBe(200);
  await page.click("button[name='add_new_note']");
  const component = page.locator(".add-post-form");
  await expect(component).toBeVisible();
  await page.click('button:has-text("Logout")');
  const component1 = page.locator(".add-post-form"); // Use ^= to match the start of the name attribute
  await expect(component1).toHaveCount(0);
});
