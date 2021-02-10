module.exports = {

    click: async (page, selector)=>{

        try
        {
            await page.waitForSelector(selector);
            await page.click(selector);
        }
        catch(err)
        {
            console.error('Failed To Click');
            throw new Error('Unable To Click Element:: '+err);
        }
    },

    getText: async (page, selector)=>{
        try
        {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (element)=>element.innerHTML);
        }
        catch(err)
        {
            console.error('Failed To Get Text');
            throw new Error('Unable To Get Text From Element:: '+err);
        }
    },

    closeFirstWin: async (browser) => {
         try {
            let pages = await browser.pages();
            if (pages.length > 1) {
                await pages[0].close();
            }
         } catch (error) {
             console.error('Unable To Close Page');
             throw new Error('Unable To Close Page '+ error);
         }
    }
}