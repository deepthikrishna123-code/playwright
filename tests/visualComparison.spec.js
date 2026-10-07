import {test, expect} from "@playwright/test"
test("visual",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveScreenshot("amazon.png")
})