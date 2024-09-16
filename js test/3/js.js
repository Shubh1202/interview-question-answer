function arrayMainpulation(){
    var text = "{"
    var res;
    var arr = [1,2,5,7,10];
    for(var i=0; i<arr.length;i++){
        res = doubling(arr[i]);
        // res = '"'+arr[i]+'"'+":"+res;
        text += '"'+arr[i]+'"'+':'+res+",";
    }
    text += "}"
    document.getElementById("result").innerHTML = text;
    // document.write(text)
}

function doubling(val){
    return val*2;
}
var result = 25;
document.getElementById("demo").innerHTML = '"'+result+'"';