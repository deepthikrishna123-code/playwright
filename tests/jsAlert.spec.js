import test from "@playwright/test"
test("alert",async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on("dialog",async(dialog)=>{
        await page.waitForTimeout(3000)
        //await dialog.accept()   //to handle the dialog box
        await dialog.dismiss()

    })

    await page.locator(".btn.btn-warning").click()

})