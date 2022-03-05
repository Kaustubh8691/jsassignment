function CreateObject(arr) {
    // Write your code here
    let d={};
    let size=arr.length;
    for (i=0;i<size;i+=2){
        if (!(arr[i] in d))
        d[arr[i]] = arr[i+1];

        //if(arr[i] not  in d){
        //}
    } 
    function sortObjectByKeys(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }
    
    let st=sortObjectByKeys(d);
        
        //Object.keys(d).sort().reduce((r, k) => (r[k] = d[k], r), {});
        return st
        
    //return d;
    

}

module.exports = CreateObject;
