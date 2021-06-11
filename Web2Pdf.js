const puppeteer = require('puppeteer');
const url = 'https://www.vogella.com/tutorials/Groovy/article.html'
const outputfile='vogella-groovy.pdf';

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
	await page.click('button.cc_b_ok')
    await page.pdf({path: outputfile, displayHeaderFooter:true, printBackground: true, footerTemplate: 'pageNumber', format: 'A4'});
    // await page.screenshot({path: 'device_testng.png', fullPage: false});
    await browser.close();
	console.log("Completed!!!")
  }
  catch(err) {
    console.log("Failed to convert URL to PDF ("+err.name+" - "+err.message+")");
    console.log(err);
  }
})();