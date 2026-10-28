# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\putCall.spec.js >> putcall
- Location: tests\API\putCall.spec.js:2:5

# Error details

```
SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
```

# Test source

```ts
  1  | import test from "@playwright/test"
  2  | test("putcall",async({request})=>{
  3  |     const updateData={
  4  |     "firstname" : "James",
  5  |     "lastname" : "Brown",
  6  |     "totalprice" : 111,
  7  |     "depositpaid" : true,
  8  |     "bookingdates" : {
  9  |         "checkin" : "2018-01-01",
  10 |         "checkout" : "2019-01-01"
  11 |     },
  12 |     "additionalneeds" : "Breakfast"
  13 | }
  14 | const updateResponse=await request.put("https://restful-booker.herokuapp.com/booking/:id",
  15 |     {header:{"Content-Type": "application/json","Accept": "application/json","Cookie": "token=abc123"},data:updateData})
  16 |     console.log(updateResponse)
> 17 |     const updatejson=await updateResponse.json()
     |                      ^ SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
  18 |     console.log(updatejson)
  19 | })
```