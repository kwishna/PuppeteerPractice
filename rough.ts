import path from 'path';
import moment from 'moment';

(async () => {
  /*  const caps = {
        "capabilities": {
            "alwaysMatch": {
                browserName: "chrome",
                platformName: "Android",
                chromedriverExecutable: "chromedriver.exe",
                "appium:platformVersion": "10",
                "appium:deviceName": "Redmi 7A",
                "appium:deviceId": "192.168.0.101:5555",
                "appium:noReset": true,
                "appium:fullReset": false,
                "appium:automationName": "UiAutomator2",
                // app: "/path/to/the/downloaded/ApiDemos-debug.apk",
                // appPackage: "io.appium.android.apis",
                // appActivity: ".view.TextFields",

                "acceptInsecureCerts": true,
                "goog:chromeOptions": {
                    "androidPackage": "com.android.chrome",
                    "androidDeviceSerial": "192.168.0.101:5555"
                },
                "goog:loggingPrefs": {
                    "browser": "ALL"
                },
                "timeouts": {"implicit": 40000, "pageLoad": 300000, "script": 30000}
            }
        }
    }*/

    // console.log(path.resolve(__filename).split("rough.ts", 1)[0]);

    console.log('Google Test: Search Text - Adobe'.replace(/[^\w]+/gi, '_') + "-" + moment().format("DD-MM-YYYY-HH-mm-ss-SSS"))
    // const driver = await new Builder()
    //     .usingServer("http://localhost:4723/wd/hub")
    //     .withCapabilities(caps)
    //     .build()
    // console.log(driver);
    // await driver.get("https://google.co.in");
    // await driver.quit();

    // const usr = Buffer.from("").toString("base64")
    // const pass = Buffer.from("").toString("base64")
    // console.log(usr)
    // console.log(pass)

})()
    .then(x => console.log("Method Running"))
    .catch(err => console.log(err))


/*
var capabilities = {
	"os_version" : "10",
	"device" : "XRedmi 7",
	"real_mobile" : "true",
	"project" : "Randomm",
	"build" : "1.3",
	"name" : "Test Name",
	"browserstack.local" : "false",
	"browserstack.debug" : "true",
	"browserstack.networkProfile" : "2g-gprs-lossy",
	"browserstack.user" : "parish3",
	"browserstack.key" : "pnVxuNvahp1GmmNm7ygx",
	"browserName" : "Android",
	"unexpectedAlertBehaviour": "accept",
	"name" : "End to End Smoke Test On: "+ new Date().toLocaleString()
	
}
*/

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
