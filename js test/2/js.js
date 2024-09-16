function displayResult(){
    let str = document.getElementById("input_val").value;
    let count = 0;
    let char = "{";
    for(let i=0; i<str.length;i++){
    char += str[i] + ":"+i+",";
    }
    
    char += "}";
    document.getElementById("result").innerHTML = char 
}