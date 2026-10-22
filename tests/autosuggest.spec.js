import { test, expect } from '@playwright/test';

test.skip('Test Autocomplete Dropdown', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/autocomplete');

  const countryInput = page.locator('#country');
  await expect(countryInput).toBeVisible();

  await countryInput.fill('Uni');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  await expect(countryInput).toHaveValue(/United/i, { timeout: 10000 });

 await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#result')).toContainText(/United/i, { timeout: 10000 });
});


test("form submit",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    const firstName=page.locator("#validationCustom01")
    const lastName=page.locator("#validationCustom02")
    
    //await page.keyboard.type("Deepthi")
    await firstName.pressSequentially("Deepthi")
    await firstName.click()
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await lastName.click()
    await page.keyboard.press("Control+V")

     const inputForm=page.getByRole("link",{name:"Input Form"})
     await inputForm.hover()
     const colorHover=await inputForm.evaluate((el)=>{
      return window.getComputedStyle(el).color
      
     })
     console.log(colorHover)

})