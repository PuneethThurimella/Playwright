import { test as basetest, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

type Fixtures = {
    loginPage: LoginPage;
};

export const test = basetest.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

test.beforeAll(async () => {
    console.log("Loading configuration...");
});

export { expect };