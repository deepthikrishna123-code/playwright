import test from '@playwright/test'
test("dropdownbox",async({page})=>{
    await page.goto("https://selenium.qabible.in/select-input.php")
    const dropdownbox=page.getByRole("combobox",{name:"Select Color"})
    await dropdownbox.selectOption("Red")

})
