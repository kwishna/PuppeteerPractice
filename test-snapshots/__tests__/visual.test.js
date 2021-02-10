const puppeteer =  require('puppeteer');
const { toMatchImageSnapshot } =  require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot })

describe("Snapshot Testing", async () =>{
    let browser;
    let page;

    beforeAll(async() => {
            browser = await puppeteer.launch({headless: true, args: ['--start-maximized']});
            page = await browser.newPage();
    });

    afterAll(async() => {
        browser.close();
    });

    test("Full Page Snapshot", async()=>{
            await page.goto("https://www.google.com");
            await page.waitForSelector("[name='q']");
            const image = await page.screenshot();
            expect(image).toMatchImageSnapshot({
                failureThresholdType: 'pixel',
                failureThreshold: 500,
            });
    });

    test("Element Snapshot", async()=>{
        await page.goto("https://www.google.com");
        const ele = await page.waitForSelector("[name='q']");
        const image = await ele.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01,
        });
    });

    test("Device Snapshot", async()=>{
        await page.goto("https://www.google.com");
        await page.emulate(puppeteer.devices['iPhone X']);
        await page.waitForSelector("[name='q']");
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot({
            failureThresholdType: 'percent',
            failureThreshold: 0.01,
        });
    });

    test("Remove Element Snapshot", async()=>{
        await page.goto("https://www.google.com");
        await page.evaluate(() => {
            ;(document.querySelectorAll("[name='q']") || []).forEach(ele => ele.remove());
        });
        await page.waitFor(500);
    });
});