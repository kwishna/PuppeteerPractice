const puppeteer = require('puppeteer');

describe('Puppeteer Test', () => {

    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch(
            { 
                product: 'chrome',
                defaultViewport: null,
                headless: false,
                "args": ["--start-maximized"],
                slowMo: 0,
                devtools: false
            });

        const incognito = await browser.createIncognitoBrowserContext();
        page = await incognito.newPage();
        
        // page = await browser.newPage();
        await page.setDefaultNavigationTimeout(30000);
    });

    after(async() => {
        await browser.close();
    })

    it("Testing In Desktop", async () => {

        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto('https://www.google.co.in');
        await page.waitFor(3000);
    });

    it("Testing In iPad", async () => {

        const pad = puppeteer.devices['iPad landscape'];
        await page.emulate(pad);
        await page.goto('https://www.google.co.in');
        await page.waitFor(3000);
    });

    it("Testing In iPad", async () => {

        const pad = puppeteer.devices['iPhone X'];
        await page.emulate(pad);
        await page.goto('https://www.google.co.in');
        await page.waitFor(3000);
    });
});