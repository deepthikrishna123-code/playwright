import { LoginPage } from "../pages/LoginPage.js"
import { ProductPage } from "../pages/ProductPage.js"
import { CartPage } from "../pages/CartPage.js"
import { CheckoutPage } from "../pages/CheckoutPage.js"
import { FinishPage } from "../pages/FinishPage.js"
export class ObjectManager
{
    constructor(page)
    {
        this.loginpage=new LoginPage(page)
        this.productpage=new ProductPage(page)
        this.cartpage=new CartPage(page)
        this.checkoutpage=new CheckoutPage(page)
        this.finishPage=new FinishPage(page)
    }
    async getLoginPage()
    {
        return this.loginpage
    }
    async getProductPage()
    {
        return this.productpage
    }
    async getcartPage()
    {
        return this.cartpage
    }
    async getCheckoutPage()
    {
        return this.checkoutpage
    }
    async getFinishPage()
    {
        return this.finishPage
    }

}