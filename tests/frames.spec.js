import {test,expect} from "@playwright/test"
test("frames",async({page})=>{
    await page.goto("https://demoqa.com/frames")
    const iframe=page.frameLocator("#frame1")
    const heading=iframe.locator("#sampleHeading")
    const content=await heading.textContent()
    await expect(heading).toHaveText(content)
    console.log(content)
})