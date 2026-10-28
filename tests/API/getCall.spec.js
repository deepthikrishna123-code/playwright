import {test,expect} from '@playwright/test';
test("Get",async({request})=>{
const response = await request.get("https://jsonplaceholder.typicode.com/posts/1")
//console.log(response)
const jsonResponse = await response.json()
console.log(jsonResponse)
const responseStatus=response.status()
console.log(responseStatus)
const statusText=response.statusText()
console.log(statusText)
expect(responseStatus).toBe(200)
expect(statusText).toBe("OK")
expect(response.ok()).toBeTruthy()
expect(jsonResponse).toHaveProperty("userId",1)  //to find the property from json data
expect(jsonResponse).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
expect(jsonResponse.body).toContain("recusandae")
})