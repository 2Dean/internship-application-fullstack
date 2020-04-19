addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */

//this function will fetch a json file from the given url, and
//then return a second url from it, and display it
async function handleRequest(request) {
  //variable decleration
  //initial fetch request to the given json file
   var urlRequested, fetch1, response, jsonTable;
   //secondary fetch based on random number generation
   var urlDerived, fetch2, response2;

   urlRequested = `https://cfw-takehome.developers.workers.dev/api/variants`;
   fetch1 = fetch(urlRequested);
   response = await fetch1;
   jsonTable = await response.json();    

  //randomizer 0 - 100
  var j = Math.round(Math.random()*100);    
  
  
  //determine what variant to be sent to with 50/50 probability
  j = j % 2;
  if(j){
      URL2 = jsonTable.variants[0];
  }else{
      URL2 = jsonTable.variants[1];
  }
   
   //fetch the variant and display it
   fetch2 = fetch(URL2)
   response2 = await fetch2;
   return response2;
}
