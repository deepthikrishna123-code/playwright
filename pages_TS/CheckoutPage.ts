import { Locator,Page } from "@playwright/test"
export class CheckoutPage
{
    firstName:Locator
    lastName:Locator
    zip:Locator
    continue:Locator
    page:Page
    constructor(page:Page)
    {
      this.firstName=page.locator("#first-name")
      this.lastName=page.getByPlaceholder("Last Name")
      this.zip=page.locator("#postal-code")
      this.continue=page.getByRole("button",{name:"continue"})
      this.page=page   
       
    }


async navigateCheckout(firstname:string,lastname:string,zip:string)
  {
    await this.firstName.fill(firstname)
    await this.lastName.fill(lastname)
    await this.zip.fill(zip)
    await this.continue.click()
  }
}