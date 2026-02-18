const fs = require('fs');
const path = require('path');
const pixelmatch = require('pixelmatch');
const PNG = require('pngjs').PNG;

async function compareScreenshot(driver, testName) {
  const baselineDir = path.resolve('baseline');
  const screenshotDir = path.resolve('screenshots');
  const diffDir = path.resolve('diff');

  if (!fs.existsSync(baselineDir)) fs.mkdirSync(baselineDir);
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir);
  if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir);

  const screenshotBase64 = await driver.takeScreenshot();
  const screenshotPath = path.join(screenshotDir, `${testName}.png`);
  fs.writeFileSync(screenshotPath, screenshotBase64, 'base64');

  const baselinePath = path.join(baselineDir, `${testName}.png`);

  if (!fs.existsSync(baselinePath)) {
    fs.copyFileSync(screenshotPath, baselinePath);
    console.log(`Baseline created for ${testName}`);
    return 0;
  }

  const img1 = PNG.sync.read(fs.readFileSync(baselinePath));
  const img2 = PNG.sync.read(fs.readFileSync(screenshotPath));

  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const mismatch = pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    { threshold: 0.1 }
  );

  const diffPath = path.join(diffDir, `${testName}-diff.png`);
  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  console.log(`Mismatch pixels: ${mismatch}`);

  return mismatch;
}

module.exports = { compareScreenshot };