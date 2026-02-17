const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, fileName) {
  const image = await driver.takeScreenshot();
  const filePath = path.join(__dirname, `../screenshots/${fileName}.png`);

  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  fs.writeFileSync(filePath, image, 'base64');
}

module.exports = { takeScreenshot };
