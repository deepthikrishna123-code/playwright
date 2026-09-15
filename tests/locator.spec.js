import {test,expect} from "@playwright/test"
test.only("locators",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Deepthi")  //located & filled the value
    //await page.pause() //pause the execution of the test
await page.locator(".form-control").nth(1).fill("Krishna")  //nth(1) is used to locate the second element in the list of elements with the same class name. for 1st element we can use first() & for last element use last()
await page.locator("[placeholder='Username']").fill("deepthik")
await page.locator("//input[@placeholder='City']").fill("Kochi")
await page.getByPlaceholder("State").fill("Kerala")
await page.getByLabel("Zip").fill("682314")
await page.getByLabel("Agree to terms and conditions").click()  //getByLabel is used for labels in the form.
const submitMessage=page.locator(".my-2")
await expect(submitMessage).not.toBeVisible()
await page.getByRole("button",{name:"Submit form"}).click()  //getByRole is used for buttons, links, checkboxes, radio buttons, etc

const message =await submitMessage.textContent()  // to fetch the text inside the locator
console.log(message)
await expect(submitMessage).toBeVisible()  //to check if the message is visible in the locator
await expect(submitMessage).toHaveText(message)  //to check if the message is visible in the locator and has the same text as the message variable
await expect(message).toContain("successfully")  //to check if the message contains the word "successfully"

await page.waitForTimeout(3000)



})
//locators are uniquely used to find web elements
//css locators

//task goto:https://selenium.qabible.in/simple-form-demo.php