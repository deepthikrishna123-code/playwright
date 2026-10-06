import { LoginPage } from "../pages_TS/LoginPage.ts"
import { ProductPage } from "../pages_TS/ProductPage.ts"
import { CartPage } from "../pages_TS/CartPage.ts"
import { CheckoutPage } from "../pages_TS/CheckoutPage.ts"
import { FinishPage } from "../pages_TS/FinishPage.ts"
import { Page } from "@playwright/test"
export class ObjectManager
{
    loginpage:LoginPage
    productpage:ProductPage
    cartpage:CartPage
    checkoutpage:CheckoutPage
    finishPage:FinishPage
    constructor(page:Page)
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