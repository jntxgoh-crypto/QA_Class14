const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;

    this.usernameField = By.id('user-name');
    this.passwordField = By.id('password');
    this.loginButton = By.id('login-button');
    this.errorMessage = By.css('[data-test="error"]');
  }

  async open() {
    await this.driver.get('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameField).clear();
    await this.driver.findElement(this.usernameField).sendKeys(username);

    await this.driver.findElement(this.passwordField).clear();
    await this.driver.findElement(this.passwordField).sendKeys(password);

    await this.driver.findElement(this.loginButton).click();
  }

  async getErrorMessage() {
    await this.driver.wait(
      until.elementLocated(this.errorMessage),
      5000
    );
    return await this.driver.findElement(this.errorMessage).getText();
  }
}

module.exports = LoginPage;
