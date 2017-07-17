/**
 * Created by Itamar on 3/29/2017.
 */

function checkEven(str) {
    var result = false;
    for (var i = 0; i < str.length; i++){
        var counts = str.split(str[i]).length - 1;
        if(counts % 2 == 0){
            result = true;
        }
        else{
            result = false;
            throw new Error("Not Even!");
        }
    }
    return result;
}

try {
    checkEven("abcabcc");
}
catch(err){
    console.log(err);
}