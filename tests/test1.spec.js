const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Puppeteer Test', ()=>{

    it("Test One", async () =>{
        const browser = await puppeteer.launch(
            { 
                product: 'chrome',
                defaultViewport: null,
                headless: false,
                "args": ["--start-maximized"],
                slowMo: 0,
                devtools: false
            });

        const page = await browser.newPage();
        page.setDefaultNavigationTimeout( 90000 );
        page.setDefaultTimeout(10000);

        let pages = await browser.pages();
        if (pages.length > 1) {
            await pages[0].close();
        }

        await page.goto('https://www.google.co.in', { 'waitUntil' : 'domcontentloaded' });
        // await page.setViewport({ width: 1920, height: 1080 });
        const element = await page.waitForSelector('[name="q"]', {hidden: false, timeout: 15000});
        console.log(await page.content());
        await element.type('Krishna');
        await page.type('[name="q"]', ' Kumar Singh', {delay: 50});
        await page.keyboard.press('Enter', {delay: 10});
        await page.waitForNavigation()
        await page.waitFor(100);    //deprecated
        await page.waitFor(() => document.querySelector("a[href*='https://www.google.']"))
        await page.click("a[href*='https://www.google.']", {clickCount: 1});
        // await page.select('locator', ['option']);
        console.log(await page.url());
        console.log(await page.title());
        expect(await page.title()).to.be.a('string', 'Krishna Kumar Singh - Google Search')
        const text = await page.$eval("a[href*='https://www.google.']", (element)=>element.getAttribute('href'));
        console.log(text)

        const dimensions = await page.evaluate(() => {
            return {
              width: document.documentElement.clientWidth,
              height: document.documentElement.clientHeight,
              deviceScaleFactor: window.devicePixelRatio
            };
          });
         
          console.log('Dimensions:', dimensions);

        await browser.close();

    });
});