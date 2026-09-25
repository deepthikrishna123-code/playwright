import test from "@playwright/test"
test("dragdrop",async({page})=>{
    await page.goto("https://selenium.qabible.in/drag-drop.php")
    const targetLocation=page.getByText("Draggable n°1")
    const destination=page.locator("#mydropzone")
    await targetLocation.dragTo(destination)


    await page.waitForTimeout(3000)
})


test("multipleDragDrop",async({page})=>{
    await page.goto("https://selenium.qabible.in/drag-drop.php")
    const targetLocation=page.locator('[draggable="true"]')
    const destination=page.locator("#mydropzone")
    const count=await targetLocation.count()
    console.log(count)
    for(let i=0;i<count;i++)
    {
        await targetLocation.nth(0).dragTo(destination)
    }
    

    await page.waitForTimeout(3000)
})