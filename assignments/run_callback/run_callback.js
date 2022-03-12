function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result

    return cb(a+b);

}

module.exports = RunCallback; 

// module.exports = RunCallback;
// now u can use that RunCallback function in other file by using reqiure()
// const RunCallback = require("../assignments/run_callback/run_callback");