import {test} from "@playwright/test"
test("1stTest",async({browser})=>{     //browser is a fixter
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.amazon.in/")
})