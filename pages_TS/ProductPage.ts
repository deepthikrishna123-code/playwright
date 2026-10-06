import { Locator,Page } from "@playwright/test"

export class ProductPage
{
    productName:Locator
    inventoryDesc:Locator
    page:Page
    constructor(page:Page)
    {
    this.productName=page.locator(".inventory_item_name")
    
    this.inventoryDesc=page.locator(".inventory_item_description")

    this.page=page
    }
    
    
    async product(myProduct:string)
    {
        
        await this.productName.allTextContents()
        const productCount=await this.productName.count()
    
        for(let i=0;i<productCount;i++)
    {
        if(await this.productName.nth(i).textContent()==myProduct)
        {
            const addToCart=this.inventoryDesc.nth(i).getByText("Add to cart")
            await addToCart.click()    
            break
            
        }
        
    }
    }
    async navigateCart()
{
const cartLink=this.page.locator(".shopping_cart_badge")
    await cartLink.click()
}
}



