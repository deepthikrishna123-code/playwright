import test from "@playwright/test"
import data from "../utiles/finaldata.json"
import {FinalPageManager} from "../pages/FinalPageManager.js"

for(const testData of finaldata)
{
test("finalProj" ,async({page})=>{

const finalpom=new FinalPageManager(page)
const finalSignuppage=await finalpom.getFinalSignupPage()
await finalSignuppage.navigatePage()
await finalSignuppage.close(uname,pwd)
await finalSignuppage.Signup(uname,pwd)



    await page.waitForTimeout(3000)
})
}
