export class FinalSignupPage
{
    constructor(page)
    {
        this.username=page.locator("#sign-username")
        this.password=page.locator("#sign-password")
        this.signup=page.getByRole("button",{name:"Sign up"})
        this.close=page.getByRole("button",{class:".btn.btn-secondary"}).first()
        this.page=page
    }
    async navigatePage()
    {
        await this.page.goto("https://www.demoblaze.com/")
        
    }
    async Signup(uname,pwd)
    {
        await this.username.fill(uname)
        await this.password.fill(pwd)
        await this.signup.click()
    }
    async close(uname,pwd)
    {
        await this.username.fill(uname)
        await this.password.fill(pwd)
        await this.close.click()
    }
}