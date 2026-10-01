export class LoginPage
{
    constructor(page)
    {
      this.username=page.getByPlaceholder("Username")
      this.password=page.locator("#password")
      this.login=page.getByRole("button",{name:"Login"})
      this.page=page
    }
    async navigatePage()
    {
        await this.page.goto("https://www.saucedemo.com/")
    }
    
    async loginUser(uname,pwd)
    {
       await this.username.fill(uname)
       await this.password.fill(pwd)
       await this.login.click()
       await this.page.waitForLoadState("networkidle")  //for wait the page to load
    }
    
    
}