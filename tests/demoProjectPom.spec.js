import {test,expect} from "@playwright/test"

import { ObjectManager } from "../pages/ObjectManger.js"

test("demoProject",async({page})=>{
    
    const pom=new ObjectManager(page) 
    const loginpage=await pom.getLoginPage() 
    const productpage=await pom.getProductPage()
    const cartpage=await pom.getcartPage()
    const checkoutpage=await pom.getCheckoutPage()
    const finishPage=await pom.getFinishPage()

    await loginpage.navigatePage()
    const uname="standard_user"
    const pwd="secret_sauce"
    await loginpage.loginUser(uname,pwd)

    
    const myProduct="Sauce Labs Backpack"
    await productpage.product(myProduct)
    await productpage.navigateCart()


    
    await cartpage.cart(myProduct)
    

    
    await checkoutpage.navigateCheckout("Deepthi","Krishna","121212")
    
    
    await finishPage.finish()
    

    
    
    
    

        
        
    


    await page.waitForTimeout(3000)
})

//product page,cart page, checkout page,final page