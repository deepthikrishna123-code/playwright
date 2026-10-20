import {test} from "@playwright/test"
test("hooks sample1",async({page})=>{
    console.log("1st test case started")
})
test("hooks sample2",async({page})=>{
    console.log("2nd test case started")
})
test("hooks sample3",async({page})=>{
    console.log("3rd test case started")
})
test.beforeAll(async()=>{
    console.log("before all hook executed")
})
test.afterAll(async()=>{
    console.log("after all hook executed")
})
test.beforeEach(async()=>{
    console.log("executed before each test case")
})
test.afterEach(async()=>{
    console.log("executed after each test case")
})