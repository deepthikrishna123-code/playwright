import test from "@playwright/test"
test("demoProject",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const username=page.getByPlaceholder("Username")
    await username.fill("standard_user")
    const password=page.locator("#password")
    await password.fill("secret_sauce")
    const login=page.getByRole("button",{name:"Login"})
    await login.click()
    await page.waitForLoadState("networkidle")  //for wait the page to load
    const productName=page.locator(".inventory_item_name")
    const productCount=await productName.count()
    console.log(productCount)
    const productList=await productName.allTextContents()   //to fetch multiple text content
    console.log(productList)
    const myProduct="Sauce Labs Backpack"

    await page.waitForTimeout(3000)
})