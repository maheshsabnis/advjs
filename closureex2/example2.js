function OuterFunction() {
 
    var outerVariable = 400;
 
    function InnerFunction1() {
       // console.log(outerVariable);
        outerVariable = outerVariable + 300; // modifying the variable in inner function
        console.log(`The Innner Function1 ${outerVariable}`);
        return outerVariable;
    }
     
    outerVariable = outerVariable + 100; // modifying the variable in parent scope
     return InnerFunction1;
}
var innerFunc = OuterFunction();

innerFunc(); 