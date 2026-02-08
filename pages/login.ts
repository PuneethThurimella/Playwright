import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly usernameinput: Locator;
  private readonly userpasswordinput: Locator;
  private readonly loginbtn: Locator;

  constructor(public readonly page: Page) {
    this.usernameinput = this.page.locator("#user-name-input");
    this.userpasswordinput = this.page.getByPlaceholder("Password");
    this.loginbtn = this.page.getByRole("button", { name: "Login" });
  }

  async login(username: string, password: string) {
    await this.usernameinput.fill(username);
    await this.userpasswordinput.fill(password);
    await this.loginbtn.click();
  }
}
