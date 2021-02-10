const puppeteer = require('puppeteer');
const url = 'http://qaautomationworld.blogspot.com/2014/11/appium-remote-execution-grid-execution.html'
const outputfile='appium-selenium-grid-docs.pdf';

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
    
    await page.goto(url, { 'waitUntil' : 'domcontentloaded' });
    await page.pdf({path: outputfile, displayHeaderFooter:true, printBackground: true, footerTemplate: 'pageNumber', format: 'A4'});
    // await page.screenshot({path: 'device_testng.png', fullPage: false});
    await browser.close();
  }
  catch(err) {
    console.log("Failed to convert URL to PDF ("+err.name+" - "+err.message+")");
    console.log(err);
  }
})();