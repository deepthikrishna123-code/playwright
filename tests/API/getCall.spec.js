import test from '@playwright/test';
test("Get",async({request})=>{
const response = await request.get("https://jsonplaceholder.typicode.com/posts/1")
console.log(response)
const jsonResponse = await response.json()
console.log(jsonResponse)

})