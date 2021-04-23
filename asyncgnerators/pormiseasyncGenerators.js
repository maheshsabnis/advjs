 

function *pollForCategories() {
    while (true) {
      yield fetch('http://localhost:6001/api/categories', {
        method: 'get'
      }).then( (d)=> {
        var json = d.json();
        return json;
      });
    }
  }
  
  function runPolling(generator) {
    if (!generator) {
      generator = pollForCategories();
    }
  
    var p = generator.next();
    p.value.then((d)=> {
      if (!d) {
        runPolling(generator);
      }
      else {
        console.log(`Data ${JSON.stringify(d)}`);
      }
    });
  }

  runPolling();
 
 async function* GetCategoriesGenerator(){
    yield fetch('http://localhost:6001/api/categories').then((res)=>{
        let d =  res.json();
        return d;
    });
}

async function consumer(){
    let res =  GetCategoriesGenerator();
   
    let a1 = res.next();
    a1.then((r)=>{
        console.log(`HAHA ${JSON.stringify(r)}`);
    });
    
} 

consumer();

