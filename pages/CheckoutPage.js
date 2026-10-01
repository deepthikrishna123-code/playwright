export class CheckoutPage
{
    constructor(page)
    {
      this.firstName=page.locator("#first-name")
      this.lastName=page.getByPlaceholder("Last Name")
      this.zip=page.locator("#postal-code")
      this.continue=page.getByRole("button",{name:"continue"})
      this.page=page   
       
    }


async navigateCheckout(firstname,lastname,zip)
  {
    await this.firstName.fill(firstname)
    await this.lastName.fill(lastname)
    await this.zip.fill(zip)
    await this.continue.click()
  }
}