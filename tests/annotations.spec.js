/*annotations:
1. test.skip() is used to skip the test case execution.
2. test.only() is used to execute only that particular test case.
3. test.fail() is used to mark the test case as failed.
4. test.slow() is used to mark the test case as slow.
5. test.describe() is used to group the test cases.
6. test.beforeEach() is used to execute the code before each test case.
*/

import {test} from "@playwright/test"
test.describe("grouping test cases",()=>{
  test.describe.configure({mode:"parallel",timeout:30000,retries:2})
test("annotations",async({page})=>{
  console.log("test started")
})
/*test.only("annotation test for only",async({page})=>{
  console.log("this test will be executed")
})*/
test.skip("annotation test for skip",async({page})=>{
  console.log("this test will be skipped")
})
/*test("annotation test for fail",async({page})=>{
  console.log("this test will fail")
  test.fail()
})*/
test("annotation test for slow",async({page})=>{
  test.slow()
  console.log("this test will be marked as slow")
  
})
test.fixme("annotation test for fixme",async({page})=>{
  console.log("this test will be marked as fixme")
})
})



