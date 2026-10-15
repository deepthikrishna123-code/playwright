import test from "@playwright/test";
test("excel @web",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const fileUpload=page.locator("#uploadFile")
    await fileUpload.setInputFiles("C:\\Deepthi\\Software Testing- Obsqura\\test_File.xlsx")

    await page.waitForTimeout(3000)

})