import test from "@playwright/test"
test("locators",async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("Hello")
    await page.getByRole("button",{name:"Show Message"}).click()
    await page.locator("#value-a").fill("10")
    await page.locator("#value-b").fill("15")
    await page.getByRole("button",{name:"Get Total"}).click()
    await page.waitForTimeout(3000)
})