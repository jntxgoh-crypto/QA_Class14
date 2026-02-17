const { By, until } = require('selenium-webdriver');

class InventoryPage {
  constructor(driver) {
    this.driver = driver;
    this.inventoryContainer = By.id('inventory_container');
  }

  async isLoaded() {
    await this.driver.wait(
      until.elementLocated(this.inventoryContainer),
      10000
    );
    return true;
  }
}

module.exports = InventoryPage;
