import { test, expect } from '@playwright/test';

test('User can signup', async ({ page }) => {
    // Navigate to the signup page
    await page.goto('http://localhost:3000'); // Change the URL to your app's signup page

    // Fill out the signup form
    await page.fill('input[name="create_user_form_username"]', 'testuser');
    await page.fill('input[name="create_user_form_email"]', 'testuser@example.com');
    await page.fill('input[name="create_user_form_password"]', 'Password123!');
    await page.fill('input[name="create_user_form_name"]', 'user1');

    let responseStatus: number | undefined;
    page.on('response', response => {
        if (response.url().includes('/signup')) {
            responseStatus = response.status();
        }
    });

    // Click the signup button
    await page.click('button[type="submit"]');

    // Wait for the response to be captured
    await page.waitForResponse(response => response.url().includes('/signup'));

    // Check for status 201
    expect(responseStatus).toBe(201);

});

test('User can login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('http://localhost:3000'); // Change the URL to your app's login page

    // Fill out the login form
    await page.fill('input[name="login_form_username"]', 'testuser');
    await page.fill('input[name="login_form_password"]', 'Password123!');

    const [response] = await Promise.all([
        page.waitForResponse(response => response.url().includes('/login') && response.status() === 200),
        page.click('button[type="submit"]')
    ]);

    // Read and verify the response
    const responseBody = await response.json();

    // Perform assertions on the response
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('token'); // Example assertion, adjust based on your actual response
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('email');
});

test('User can logout', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Change the URL to your app's login page
    // Fill out the login form
    await page.fill('input[name="login_form_username"]', 'testuser');
    await page.fill('input[name="login_form_password"]', 'Password123!');

    const [response] = await Promise.all([
        page.waitForResponse(response => response.url().includes('/login') && response.status() === 200),
        page.click('button[type="submit"]')
    ]);
    // Perform assertions on the response
    expect(response.status()).toBe(200);
    await page.click("button[name='add_new_note']");
    const component = page.locator('.add-post-form');
    await expect(component).toBeVisible();
    await page.click('button:has-text("Logout")');
    const component1 = page.locator('.add-post-form'); // Use ^= to match the start of the name attribute
    await expect(component1).toHaveCount(0);
});

test('Check if edit and delete not show', async ({ page }) => {
    // Navigate to the page where the component should not be
    await page.goto('http://localhost:3000'); // Change to the URL of your app

    // Check if the component does not exist
    const component1 = page.locator('[name^="edit-"]'); // Use ^= to match the start of the name attribute
    await expect(component1).toHaveCount(0);
    const component2 = page.locator('[name^="delete-"]'); // Use ^= to match the start of the name attribute
    await expect(component2).toHaveCount(0);
});
test("add post", async ({ page }) => {
    await page.goto('http://localhost:3000'); // Change the URL to your app's login page
    // Fill out the login form
    await page.fill('input[name="login_form_username"]', 'testuser');
    await page.fill('input[name="login_form_password"]', 'Password123!');

    const [response] = await Promise.all([
        page.waitForResponse(response => response.url().includes('/login') && response.status() === 200),
        page.click('button[type="submit"]')
    ]);
    // Perform assertions on the response
    expect(response.status()).toBe(200);
    await page.click("button[name='add_new_note']");
    await page.fill('input[name="text_input_title_new_note"]', 'test_post');
    await page.fill('input[name="text_input_new_note"]', 'test post data');
    await page.fill('input[name="text_input_author_new_note"]', 'user1');
    await page.fill('input[name="text_input_email_new_note"]', 'testuser@example.com');

    await page.route('**/api/your-endpoint', (route) => {
        route.fulfill({
            status: 201,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Created' }),
        });
    });

    // Click the save button
    await page.click('button[name="text_input_save_new_note"]');

    // Verify that the status is 201
    const [response1] = await Promise.all([
        page.waitForResponse('**/api/your-endpoint'),
    ]);

    expect(response1.status()).toBe(201);
    page.click("button[nme='last']");
    const authorName = page.locator("h3");
    await expect(authorName).toBeVisible();
    await expect(authorName).toHaveText('Author Name');
});