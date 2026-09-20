import {test,expect} from '@playwright/test'
test("modal",async({page})=>{
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    const launchModal=page.getByRole("button",{name:"Launch modal"}).first()
    await launchModal.click()
    const modal=page.locator("#exampleModalCenter")
    await expect(modal).toBeVisible()
    await modal.locator(".btn.btn-secondary").click()

})