let text = "";
function strReverse(){
    let str1 = document.getElementById("input_text").value;
    if(str1 ==""){
    alert("Please Enter Your String");
    return false;}
    for(let i=(str1.length-1);i>=0;i--){
        text += str1[i];
        if((str1[i].charCodeAt())%2 == 0){
            console.log(`${str1[i]} is even`)
        }
        else{
            console.log(`${str1[i]} is Odd`)
        }
    }
    console.log(text)
}    

function charFrequency(){
    let str1 = document.getElementById("input_text").value;
    if(str1 ==""){
    alert("Please Enter Your String");
    return false}
    let char = document.getElementById("input_char").value;
    if(char == ""){
    alert("Please Enter Character Which you want to find Frequency in String");
    return false;}
    let count = 0;
    for(let i = 0; i< str1.length; i++){
        if(str1[i] == char)
        count++;
    }
    console.log(`${char} is found ${count} times`)
}

/*function charFrequency_in_String(){
    let str = document.getElementById("input_text").value;
    if(str == ""){
        alert("Please Enter Your String");
        return false;
    }
    let count;
    for(let i =0; i<str.length;i++){
        count = 0;
        let char = str[i];
        for(let j=0; j<str.length;j++ ){
            if(char == str[j])
            {
            count++;
            }
        }
        str[i] =" ";
        // text += count
        console.log(`${str[i]} is found is ${count} times`)
    }
    // console.log(text)
    // console.log(str.match(/[a-z]/gi))
}
*/

// function getF(str){
//     var fr ={};
//     for(var i =0; i< str.length; i++){
//         var char = str.charAt(i)
//         console.log(char)
//         if(fr[char]){
//           fr[char]++;
//         }else{
//          fr[char] = 1;
//         }
//     }
//     return fr
// }
// console.log(getF("Shubh"))
// let data = getF("Shubh")
// document.getElementById("demo").innerHTML = text;


let str = "shubh";
let freq = {};
for(let i=0; i<str.length;i++){
    char = str[i];
    if(freq[char])
    freq[char]++;
    else
    freq[char] = 1;
}

console.log(freq);
console.log(str.match(/[a-z]/g));
