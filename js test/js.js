function validate(){
    let pass = document.getElementById("password_text").value;
    if(pass == ""){
        alert("Password should not be blank");
    }else if(pass.length < 8){
        alert("Password must be greater or equal to 8 Character");
    }else if(pass.match(/[0-9]/g) == null || pass.match(/[A-z]/g) == null){
        alert("Password must contain 1 number and 1 character");
    }else if(pass[0] == pass.match(/[0-9]/)){
        alert("Passord not start with number");
    }
    else{
        alert("Password is valid")
    }
}