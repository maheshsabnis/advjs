 

function parallelCalls(){
  let catPromise = fetch("http://localhost:6001/api/categories");   
  let prdPromise = fetch("http://localhost:6002/api/products");
  
  Promise.all([catPromise, prdPromise])
        .then((responses)=>{
            return Promise.all(responses.map((response)=>{
                return response.json();
            })).then((data)=>{
                console.log(`Result = ${JSON.stringify(data)}`);
            }).catch((error)=>{
                console.error(`Error Occured ${error}`);
            });
        });
}