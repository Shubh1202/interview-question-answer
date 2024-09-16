function getText(){
    let getText = document.getElementById("input_val").value;
    let getChar = getText[getText.length-1];
    getChar = getChar.toUpperCase();
    let text = "uCertify";
    let res  = text.concat(" ",getChar);
    document.getElementById("demo").innerHTML = res;

}