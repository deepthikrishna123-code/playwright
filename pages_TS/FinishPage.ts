import {expect, Locator, Page} from "@playwright/test"
export class FinishPage
{
    finishButton:Locator
    page:Page
    constructor(page:Page)
    {
      this.finishButton=page.getByRole("button",{name:"finish"})
      this.page=page
    }
    async finish()
    {
     await this.finishButton.click()
     const msg=await this.page.locator(".complete-header").textContent()
     await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
     console.log(msg)
     expect(msg).toContain("Thank you for your order!")
    }
    
    
}