function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
//     function cb(some){
//     document.getElementById("demo").innerHTML=some;
    return cb(a+b);
//     }
   

// }
// function summ(a,b,cb){
//     let summ =a+b
//     cb(summ)
}

module.exports = RunCallback; 
