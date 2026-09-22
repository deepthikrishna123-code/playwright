import test from "@playwright/test"
test("prompt",async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    page.on("dialog",async(promptBox)=>{
        console.log(promptBox.type())
    console.log(promptBox.message())
        await promptBox.accept("Deepthi")
      console.log(promptBox.message())
        
    })
    await page.locator(".btn.btn-danger").click()
})

//task date picker