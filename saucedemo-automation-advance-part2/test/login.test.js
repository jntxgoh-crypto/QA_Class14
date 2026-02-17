const { Builder } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const assert = require('assert');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const { takeScreenshot } = require('../utils/visualHelper');

describe('SauceDemo Login - POM Implementation', function () {
  this.timeout(60000);

  let driver;
  let loginPage;
  let inventoryPage;

  before(async function () {
    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeOptions(new edge.Options())
      .build();

    loginPage = new LoginPage(driver);
    inventoryPage = new InventoryPage(driver);
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  beforeEach(async function () {
    await loginPage.open();
  });

  it('Login with valid credentials', async function () {
    await loginPage.login('standard_user', 'secret_sauce');

    const loaded = await inventoryPage.isLoaded();
    assert.strictEqual(loaded, true);

    await takeScreenshot(driver, 'positive_login');
  });

  it('Login with invalid username', async function () {
    await loginPage.login('invalid_user', 'secret_sauce');

    const errorText = await loginPage.getErrorMessage();
    assert.ok(errorText.includes('Username and password do not match'));

    await takeScreenshot(driver, 'invalid_username');
  });

  it('Login with wrong password', async function () {
    await loginPage.login('standard_user', 'wrong_password');

    const errorText = await loginPage.getErrorMessage();
    assert.ok(errorText.includes('Username and password do not match'));

    await takeScreenshot(driver, 'wrong_password');
  });

  it('Login with locked_out_user', async function () {
    await loginPage.login('locked_out_user', 'secret_sauce');

    const errorText = await loginPage.getErrorMessage();
    assert.ok(errorText.includes('Sorry, this user has been locked out'));

    await takeScreenshot(driver, 'locked_out_user');
  });

});
