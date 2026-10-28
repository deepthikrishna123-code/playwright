import {test,expect} from '@playwright/test';
test("post",async({request})=>{
    const authData={
    "username" : "admin",
    "password" : "password123"
}
    const postResponse=await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type": "application/json"},data:authData})
    console.log(postResponse)
    const postjson=await postResponse.json()
    console.log(postjson)
    expect(postjson.token).not.toBeNull()
})


test("bookingData",async({request})=>{
    const bookingData={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
const bookResponse=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type": "application/json"},data:bookingData})
console.log(bookResponse)
const bookingjson=await bookResponse.json()
console.log(bookingjson)
})