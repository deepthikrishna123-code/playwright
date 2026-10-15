import test from "@playwright/test";
test("dwnld @web",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const dwnld=page.getByRole("button",{name:"Download"})
    const dwnldPromise=page.waitForEvent("download")
    await dwnld.click()
    const download=await dwnldPromise
    await download.saveAs("C:\\Deepthi\\Software Testing- Obsqura\\image.jpeg")


    await page.waitForTimeout(3000)




})