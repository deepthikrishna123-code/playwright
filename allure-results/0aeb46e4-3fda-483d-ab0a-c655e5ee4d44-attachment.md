# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\getCall.spec.js >> Get
- Location: tests\API\getCall.spec.js:2:5

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | import test from '@playwright/test';
  2  | test("Get",async({request})=>{
  3  | const response = await request.get("https://jsonplaceholder.typicode.com/posts/1")
  4  | //console.log(response)
  5  | const jsonResponse = await response.json()
  6  | //console.log(jsonResponse)
  7  | const responseStatus=response.status()
  8  | console.log(responseStatus)
  9  | const statusText=response.statusText()
  10 | console.log(statusText)
> 11 | expect(responseStatus).toBe(200)
     |  ^ ReferenceError: expect is not defined
  12 | expect(statusText).toBe("OK")
  13 | })
```