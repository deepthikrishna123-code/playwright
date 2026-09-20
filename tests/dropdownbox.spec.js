import {test,expect} from '@playwright/test'
test("dropdownbox",async({page})=>{
    await page.goto("https://selenium.qabible.in/select-input.php")
    const dropdownbox=page.getByRole("combobox",{name:"Select Color"})
    await dropdownbox.selectOption("Red")
    const selectColor=page.locator(".my-2").first()
    await expect(selectColor).toBeVisible()
    const msg=await selectColor.textContent()
    console.log(msg)
    expect(msg).toContain("Red")






    await page.waitForTimeout(3000)


})
