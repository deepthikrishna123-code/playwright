import {test,expect} from "@playwright/test"
import { ObjectManager } from "../pages/ObjectManger.js"
import data from "../utiles/data.json"
//const testData=JSON.parse(JSON.stringify(data))  //stringyfy to convert json to string, parse to convert string to js

 for(const testData of data)
 {
test(`demoProject ${testData.myProduct}`,async({page})=>{
 
    const pom=new ObjectManager(page) 
    const loginpage=await pom.getLoginPage() 
    const productpage=await pom.getProductPage()
    const cartpage=await pom.getcartPage()
    const checkoutpage=await pom.getCheckoutPage()
    const finishPage=await pom.getFinishPage()

    await loginpage.navigatePage()
    await loginpage.loginUser(testData.uname,testData.pwd)

    
    
    await productpage.product(testData.myProduct)
    await productpage.navigateCart()

    await cartpage.cart(testData.myProduct)
   
    await checkoutpage.navigateCheckout(testData.firstName,testData.lastName,testData.zipCode)
   
    await finishPage.finish()
    

    
    
    
    

        
        
    


    await page.waitForTimeout(3000)
})
}

//product page,cart page, checkout page,final page