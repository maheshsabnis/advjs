function getProducts(){
    let promise = fetch("https://apiapptrainingnewapp.azurewebsites.net/api/Products",{
        method: "GET",
    });

    return promise;
}