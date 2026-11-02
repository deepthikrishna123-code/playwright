import test from "@playwright/test"
test("putcall",async({request})=>{
    const updateData={
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
const updateResponse=await request.put("https://restful-booker.herokuapp.com/booking/3607",
    {header:{"Content-Type": "application/json","Accept": "application/json","Cookie": "token=d85d837e32e5dc0"},data:updateData})
    console.log(updateResponse)
    const updatejson=await updateResponse.json()
    console.log(updatejson)
})