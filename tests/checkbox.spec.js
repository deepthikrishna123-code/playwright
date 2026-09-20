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
    const result=await SingleCheckBox.isChecked()
    console.log(result)
    await expect(SingleCheckBox).toBeChecked()
    expect (result).toBeTruthy()   //value must be true
    //expect (result).toBeFalsy()  //value must be false

    const radioButtonDemo=page.getByRole("link",{name:"Radio Buttons Demo"})
    await radioButtonDemo.click()
    const Female=page.locator("#inlineRadio2")
    await Female.check()
    const showSelectedValue=page.locator("#button-one")
    await showSelectedValue.click()
    const button1=page.locator("#button-one")
    await button1.click()
    const radiolocator=page.locator("#message-one")
    await expect(radiolocator).toBeVisible()
    const msg1=await radiolocator.textContent()
    console.log(msg1)

    

    await page.waitForTimeout(3000)   
})
//use toContain for task