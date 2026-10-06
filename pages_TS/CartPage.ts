import {expect, Locator, Page} from "@playwright/test"
export class CartPage
{
    cartTitle:Locator
    page:Page
    constructor(page:Page)
    {
        this.cartTitle=page.locator(".inventory_item_name")
        this.page=page
            
    }
    async cart(myProduct:string)
    {
        await expect(this.cartTitle.filter({hasText:myProduct})).toHaveText(myProduct)
        await this.page.getByRole("button",{name:"Checkout"}).click()
    }
}