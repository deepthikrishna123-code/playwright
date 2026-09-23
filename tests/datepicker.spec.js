import test from "@playwright/test"
test("datepicker",async({page})=>{
    await page.goto("https://selenium.qabible.in/date-picker.php")
    await page.locator("#single-input-field").click()
    await page.locator(".datepicker-days th.datepicker-switch").click()
    await page.locator(".datepicker-months th.datepicker-switch").click()
    const targetYear=2014
    const targetMonth=11
    const targetDate=15
    while(true)
    {
        const currentRange=await page.locator(".datepicker-years th.datepicker-switch").textContent()
        console.log(currentRange)
        const startYear=currentRange.split("-")[0]
        console.log(startYear)
        const endYear=currentRange.split("-")[1]
        console.log(endYear)
        if(targetYear>=startYear && targetYear<=endYear)
        //2014>=2020 && 2014<=2029  2014>=2010 && 2014<=2019
        {
            break
        }    
    
    if(targetYear<startYear)
        {
           await page.locator(".datepicker-years th.prev").click()
        }
    else
       {
           await page.locator(".datepicker-years th.next").click()
       }
    }
    //await page.getByText(targetYear.toString(),{excat:true}).click()
    await page.locator("span.year").filter({hasText:targetYear.toString()}).click()
    await page.locator(".month").nth(targetMonth-1).click()


    await page.waitForTimeout(3000)

})