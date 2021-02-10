const puppeteer =  require('puppeteer');
const { percySnapshot } =  require('@percy/puppeteer');

describe("Percy Visual Testing", async () =>{

    let browser;
    let page;

    beforeAll(async() => {
            browser = await puppeteer.launch({headless: false, args: ['--start-maximized']});
            page = await browser.newPage();
    });

    afterAll(async() => {
        browser.close();
    });

    test("Google Desktop Snapshot", async()=>{
            await page.goto("https://www.google.com");
            await page.waitForSelector("[name='q']");
            await percySnapshot(page, 'Google Home Page', {});
    });

    test("Google Device Snapshot", async()=>{
        await page.goto("https://www.google.com");
        await page.emulate(puppeteer.devices['iPhone X']);
        await page.waitForSelector("[name='q']");
        await percySnapshot(page, 'Google Home Page Device', {});
    });

    test("Google Removed Element Snapshot", async()=>{
        await page.goto("https://www.google.com");
        await page.evaluate(() => {
            ;(document.querySelectorAll("[name='q']") || []).forEach(ele => ele.remove());
        });
        await page.waitFor(500);
        await percySnapshot(page, 'Google Home Page Edited', {});
    });
});