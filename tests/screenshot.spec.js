import test from "@playwright/test"
test("screenshot",async({page})=>{
    await page.goto("https://selenium.qabible.in")
    await page.screenshot({path:"screen.png",fullPage:true}) //to take full page screenshot
    const homePage=page.getByRole("link",{name:"Home"})
    await homePage.screenshot({path:"homePage.png"}) //to take screenshot of specific element
})