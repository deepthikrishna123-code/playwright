import test from "@playwright/test"
test.only("locators",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Deepthi")  //located & filled the value
    //await page.pause() //pause the execution of the test
await page.waitForTimeout(3000)

})
//locators are uniquely used to find web elements
//css locators