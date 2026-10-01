import {expect} from "@playwright/test"
export class CartPage
{
    constructor(page)
    {
        this.cartTitle=page.locator(".inventory_item_name")
        this.page=page
            
    }
    async cart(myProduct)
    {
        await expect(this.cartTitle.filter({hasText:myProduct})).toHaveText(myProduct)
        await this.page.getByRole("button",{name:"Checkout"}).click()
    }
}