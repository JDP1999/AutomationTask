class ApiPage{
    checkPage(){
        let arr = []
        var counter=0,length, arrcounter=0
        cy.request("https://api.zippopotam.us/de/bw/stuttgart").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.duration).to.not.be.greaterThan(1000)
            expect(response.body.country).to.eq("Germany")
            expect(response.body.state).to.eq("Baden-Württemberg")
            length=response.body.places.length
            for(counter=0;counter<=length-1;counter++){
                if(response.body.places[counter]["post code"]==70597){
                    arr[arrcounter]=response.body.places[counter]["place name"]
                    arrcounter++
                }
            }
            expect(arr).to.include("Stuttgart Degerloch")
        })

    }
    checkBeverlyHills(){
        cy.request("http://api.zippopotam.us/us/90210").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.headers['content-type']).to.eq("application/json")
            expect(response.duration).to.not.be.greaterThan(1000)
            expect(response.body.places[0]["place name"]).to.eq("Beverly Hills")
        })
    }
    checkSchenectady(){
        cy.request("http://api.zippopotam.us/us/12345").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.headers['content-type']).to.eq("application/json")
            expect(response.duration).to.not.be.greaterThan(1000)
            expect(response.body.places[0]["place name"]).to.eq("Schenectady")
        })
    }
    checkWaverley(){
        cy.request("http://api.zippopotam.us/ca/B2R").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.headers['content-type']).to.eq("application/json")
            expect(response.duration).to.not.be.greaterThan(1000)
            expect(response.body.places[0]["place name"]).to.eq("Waverley")
        })
    }
}
export default ApiPage