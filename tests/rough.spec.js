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
    
    await page.goto('https://testng.org/doc/documentation-main.html', { 'waitUntil' : 'domcontentloaded' });
    // Screenshots
    await page.screenshot({path: 'testng.png', fullPage: true});
    // PDF
    await page.pdf({path: "testng-docs.pdf", displayHeaderFooter:true, printBackground: true, footerTemplate: 'pageNumber', format: 'A4'});
    // Device Emulation
    await page.emulate(puppeteer.devices['iPhone X']);
    // Device Screenshot
    await page.screenshot({path: 'device_testng.png', fullPage: false});
    await browser.close();
  }
  catch(err) {
    console.log("Failed to convert URL to PDF ("+err.name+" - "+err.message+")");
    console.log(err);
  }
})();