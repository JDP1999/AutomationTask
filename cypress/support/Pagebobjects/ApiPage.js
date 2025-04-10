class ApiPage{
    checkPage(){
        //Initialize the result array
        let arr = []

        //Initialize variables that are used for later
        var counter=0,length, arrcounter=0

        //Send a rquest to the site
        cy.request("https://api.zippopotam.us/de/bw/stuttgart").then((response)=>{
            //Check that the status code is 200
            expect(response.status).to.eq(200)

            //Check that the content-type is json
            expect(response.headers['content-type']).to.eq("application/json")

            //Check that the response time is less then 1 second
            expect(response.duration).to.not.be.greaterThan(1000)

            //Check that the country in response is Germany
            expect(response.body.country).to.eq("Germany")

            //Check that the state in response is Baden-Württemberg
            expect(response.body.state).to.eq("Baden-Württemberg")

            //Give the length variablle the number of places listed
            length=response.body.places.length

            //Execute this loop until the number of places listed -1
            for(counter=0;counter<=length-1;counter++){

                //Check for all states if post code is 70597
                if(response.body.places[counter]["post code"]==70597){

                    //If the post code is 70597 add the place to the result array
                    arr[arrcounter]=response.body.places[counter]["place name"]

                    //Increment the arrcounter by 1
                    arrcounter++
                }
            }

            //Check if the result array contains Stuttgart Degerloch
            expect(arr).to.include("Stuttgart Degerloch")
        })

    }

    checkBeverlyHills(){
        //Send a request to the site
        cy.request("http://api.zippopotam.us/us/90210").then((response)=>{

            //Check that the status code is 200
            expect(response.status).to.eq(200)

            //Check that the content-type is json
            expect(response.headers['content-type']).to.eq("application/json")

            //Check that the response time is less then 1 second
            expect(response.duration).to.not.be.greaterThan(1000)

            //Check that the place name is Beverly Hills
            expect(response.body.places[0]["place name"]).to.eq("Beverly Hills")
        })
    }
    checkSchenectady(){
        //Send a request to the site
        cy.request("http://api.zippopotam.us/us/12345").then((response)=>{

            //Check that the status code is 200
            expect(response.status).to.eq(200)

            //Check that the content type is json
            expect(response.headers['content-type']).to.eq("application/json")

            //Check that the response time is less then 1 second
            expect(response.duration).to.not.be.greaterThan(1000)

            //Check that the place name is Schenectady
            expect(response.body.places[0]["place name"]).to.eq("Schenectady")
        })
    }
    checkWaverley(){
        //Send a request to the site
        cy.request("http://api.zippopotam.us/ca/B2R").then((response)=>{

            //Check that the status code is 200
            expect(response.status).to.eq(200)

            //Check that the content-type is json
            expect(response.headers['content-type']).to.eq("application/json")

            //Check that the response is less then 1 second
            expect(response.duration).to.not.be.greaterThan(1000)

            //Check that the place name is Waverly
            expect(response.body.places[0]["place name"]).to.eq("Waverley")
        })
    }
}
export default ApiPage