import {test as base} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
const customtest=base.extend({
    loggedin:async({page},use)=>{
const loginPage=new LoginPage(page)
await loginPage.navigatePage()
await loginPage.loginUser("standard_user","secret_sauce")
await use(LoginPage)   
}
    

})
export {customtest}