const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);

    this.url = 'https://www.saucedemo.com/';
    this.username = By.id('user-name');
    this.password = By.id('password');
    this.loginBtn = By.id('login-button');
    this.errorMsg = By.css('[data-test="error"]');
  }

  async open() {
    await this.visit(this.url);
  }

  async setUsername(value) {
    await this.driver.findElement(this.username).clear();
    await this.driver.findElement(this.username).sendKeys(value);
  }

  async setPassword(value) {
    await this.driver.findElement(this.password).clear();
    await this.driver.findElement(this.password).sendKeys(value);
  }

  async clickLogin() {
    await this.driver.findElement(this.loginBtn).click();
  }

  async login(username, password) {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    return await this.getText(this.errorMsg);
  }
}

module.exports = LoginPage;