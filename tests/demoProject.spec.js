import {test,expect} from "@playwright/test"
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
    for(let i=0;i<productCount;i++)
    {
        if(await productName.nth(i).textContent()==myProduct)
        {
            const inventoryDesc=page.locator(".inventory_item_description").nth(i)
            const addToCart=inventoryDesc.getByText("Add to cart")
            await addToCart.click()    
            break
            
        }
        
    }
    const cart=page.locator(".shopping_cart_badge")
    await cart.click()
    const cartTitle=page.getByText("Sauce Labs Backpack")
    await expect(cartTitle).toHaveText(myProduct)
    await page.getByRole("button",{name:"Checkout"}).click()
    const firstName=page.locator("#first-name")
    await firstName.fill("Deepthi")
    const lastName=page.getByPlaceholder("Last Name")
    await lastName.fill("Krishna")
    const zip=page.locator("#postal-code")
    await zip.fill("121212")
    await page.getByRole("button",{name:"continue"}).click()
    const finish=page.getByRole("button",{name:"finish"})
    await finish.click()
    const msg=await page.toHaveUrl("https://www.saucedemo.com/checkout-complete.html").textContent()
    console.log(msg)
    await expect(msg).toContain("Thank you for your order!")
    
    //await page.toHaveUrl("https://www.saucedemo.com/checkout-complete.html")
    

        
        
    


    await page.waitForTimeout(3000)
})