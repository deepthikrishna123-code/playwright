import test, { expect } from '@playwright/test'
test("chekbox",async({page})=>{
    await page.goto("https://selenium.qabible.in/check-box-demo.php")
    const inputForm=page.getByRole("link",{name:"Input Form"})
    await inputForm.click()
    const checkBoxDemo=page.getByRole("link",{name:"Checkbox Demo"})
    await checkBoxDemo.click()
    const SingleCheckBox=page.getByRole("checkbox",{name:"Click on this check box"})
    await SingleCheckBox.check()
    
    const checkBox1=page.locator(".my-2")
    await expect(checkBox1).toBeVisible()
    const msg=await checkBox1.textContent()
    console.log(msg)
    await expect(checkBox1).toHaveText(msg)
    await page.waitForTimeout(3000)   
})
//use toContain for task