import { test, expect } from '@playwright/test';
import { userSchema, User } from '../backend/index.js'
test("add new user", async (user) => {
    let res;
    await checkUserExists(user, true).then(() => res = true).catch(() => res = false);
    expect(res).toBe(true);
});


async function checkUserExists(user, expected) {
    await User.find(user).catch(() => { throw "User not found"; })
}