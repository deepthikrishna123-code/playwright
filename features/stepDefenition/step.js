import{ Given, When, Then } from "@cucumber/cucumber";
import { ObjectManager } from "../../pages/ObjectManger.js";
import { chromium } from "@playwright/test";
Given('Enter {string} and {string}',async function (uname, pwd) {
  const browser=await chromium.launch({headless:false})
  const context=await browser.newContext()
  this.page=await context.newPage()
  this.pom=new ObjectManager(this.page) 
     const loginpage=await this.pom.getLoginPage()
     await loginpage.navigatePage()
     await loginpage.loginUser(uname,pwd)
});
When('add {string} to the cart',async function (myProduct) {
    const productpage=await this.pom.getProductPage()
    await productpage.product(myProduct)
    await productpage.navigateCart()
});

Then('verify {string} is add to the cart',async function (myProduct) {
  const cartpage=await this.pom.getcartPage()
  await cartpage.cart(myProduct)
});
When('valid {string},{string},{string} added',async function (firstName, lastName, zipCode) {
    const checkoutpage=await this.pom.getCheckoutPage()
    await checkoutpage.navigateCheckout(firstName,lastName,zipCode)
});
Then('checked order confirmation',async function () {
    const finishPage=await this.pom.getFinishPage()
    await finishPage.finish()

});