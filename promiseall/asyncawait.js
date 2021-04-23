async function  AsyncAwait(){
    let catPromise = await fetch("http://localhost:6001/api/categories");   
    let prdPromise = await fetch("http://localhost:6002/api/products");

    let categories = await catPromise.json();
    let products = await prdPromise.json();
   
    console.log(`In code Categories ${JSON.stringify(categories)}`);
    console.log(`In code Products ${JSON.stringify(products)}`);
    return [categories, products];    
}