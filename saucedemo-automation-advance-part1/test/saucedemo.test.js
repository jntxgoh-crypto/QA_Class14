const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const assert = require('assert');

describe('SauceDemo - Login & Sort A-Z (With Hooks)', function () {
  this.timeout(60000);

  let driver;

  before(async function () {
    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeOptions(new edge.Options())
      .build();

    await driver.manage().window().maximize();
  });

  beforeEach(async function () {
    await driver.get('https://www.saucedemo.com/');
  });

  afterEach(async function () {
    console.log('Test finished');
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it('should login successfully and sort products A-Z', async function () {
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    await driver.wait(
      until.elementLocated(By.className('inventory_item')),
      10000
    );

    const dropdown = await driver.findElement(
      By.className('product_sort_container')
    );

    await dropdown.click();
    await dropdown.findElement(By.css("option[value='az']")).click();

    await driver.wait(async () => {
      const firstItem = await driver
        .findElement(By.className('inventory_item_name'))
        .getText();
      return firstItem === 'Sauce Labs Backpack';
    }, 5000);

    const products = await driver.findElements(
      By.className('inventory_item_name')
    );

    const actualNames = [];
    for (let product of products) {
      actualNames.push(await product.getText());
    }

    const expectedNames = [...actualNames].sort((a, b) =>
      a.localeCompare(b)
    );

    assert.deepStrictEqual(actualNames, expectedNames);
  });

});
