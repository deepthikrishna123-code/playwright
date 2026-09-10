import test from "@playwright/test"
test.only("locators",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Deepthi")  //located & filled the value
    //await page.pause() //pause the execution of the test
await page.locator(".form-control").nth(1).fill("Krishna")
await page.locator("[placeholder='Username']").fill("deepthik")
await page.locator("//input[@placeholder='City']").fill("Kochi")
await page.getByPlaceholder("State").fill("Kerala")
await page.getByLabel("Zip").fill("682314")
await page.getByLabel("Agree to terms and conditions").click()  //getByLabel is used for labels in the form.
await page.getByRole("button",{name:"Submit form"}).click()  //getByRole is used for buttons, links, checkboxes, radio buttons, etc

await page.waitForTimeout(3000)



})
//locators are uniquely used to find web elements
//css locators

//task goto:https://selenium.qabible.in/simple-form-demo.php