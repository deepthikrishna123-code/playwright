import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
test("demoProject",async({page})=>{
    
    const loginpage=new LoginPage(page)     //constructor for LoginPage
    await loginpage.navigatePage()
    await loginpage.loginUser()
    
    
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
    //await page.toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    const msg=await page.locator(".complete-header").textContent()
    console.log(msg)
    expect(msg).toContain("Thank you for your order!")
    
    
    

        
        
    


    await page.waitForTimeout(3000)
})

//product page,cart page, checkout page,final page