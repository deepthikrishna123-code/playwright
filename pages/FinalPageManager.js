import { FinalSignupPage } from "../pages/FinalSignupPage.js"
export class FinalPageManager
{
    constructor(page)
    {
        this.finalSignuppage=new FinalSignupPage(page)
    }
    async getFinalSignupPage()
    {
        return this.finalSignuppage
    }
}
