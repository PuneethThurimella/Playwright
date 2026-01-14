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

  // async goto() {
  //     await this.page.goto('https://www.amazon.in');
  // }

  async login(user: string, pass: string) {
    await this.usernameinput.fill(user);
    await this.userpasswordinput.fill(pass);
    await this.loginbtn.click();
  }
}
