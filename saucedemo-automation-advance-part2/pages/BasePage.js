const { until } = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async visit(url) {
    await this.driver.get(url);
  }

  async waitForElement(locator, timeout = 10000) {
    await this.driver.wait(until.elementLocated(locator), timeout);
  }

  async getText(locator) {
    await this.waitForElement(locator);
    return await this.driver.findElement(locator).getText();
  }
}

module.exports = BasePage;