const puppeteer = require('puppeteer');

(async function() {
    try {
        const browser = await puppeteer.launch({
        headless: true,
        product: "chrome",
        args: ["--start-maximized"],
        defaultViewport: null,
      });
  
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(90000);
      await page.setDefaultTimeout(10000);
  
      const context = await browser.defaultBrowserContext();
      // geolocation
      await context.overridePermissions('https://www.google.com', ['geolocation']);
      await page.goto('https://www.google.com/');
      await page.waitForSelector("[name='q']");
      // geolocation
      await page.setGeolocation({latitude: 90, longitude: 0, accuracy: 100});
      // screenshot
      await page.screenshot({path: 'geolocation.png'});

      // accessibility
      const accessib = await page.accessibility.snapshot();
      console.log(accessib);

      // performance
      // const metrix = await page.evaluate(() => {JSON.stringify(window.performance)});
      // console.log(JSON.parse(metrix));

      await browser.close();
    }
    catch(err) {
      console.log("Failed to convert URL to PDF ("+err.name+" - "+err.message+")");
      console.log(err);
    }
  })();
