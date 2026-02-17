const { Builder } = require('selenium-webdriver');

(async function test() {
    try {
        let driver = await new Builder()
            .forBrowser('firefox')
            .build();

        await driver.get('https://google.com');
        console.log("SUCCESS: Firefox opened");

        await driver.quit();
    } catch (err) {
        console.error("REAL ERROR:");
        console.error(err);
    }
})();