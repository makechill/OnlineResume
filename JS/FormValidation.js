function validateForm(){
    var resfn = document.getElementById("fn").value
    var resln = document.getElementById("ln").value
    var resnum = document.getElementById("ph").value
    
    
    var valfname = /^[a-zA-Z]{3,15}$/.test(resfn)
    var vallname = /^[a-zA-Z]{3,15}$/.test(resln)
    var valnum = /^[6-9]{1}[0-9]{9}$/.test(resnum)
    // var resdob = document.getElementById("dob").value
    
    if(valfname==false){
        document.getElementById("fname").innerHTML = ""
        document.getElementById("fnamee").innerHTML = "Characters must be Greater than 2 and less than 15"
        document.getElementById("fn").style.border = "1px solid red"
        return false
    }
    else{
        document.getElementById("fnamee").innerHTML = ""
        document.getElementById("fn").style.border = "1px solid black"
    }
    
    if(vallname==false){
        document.getElementById("lname").innerHTML = ""
        document.getElementById("lnamee").innerHTML = "Characters must be Greater than 2 and less than 15"
        document.getElementById("ln").style.border = "1px solid red"
        return false
    }
    else{
        document.getElementById("lnamee").innerHTML = ""
        document.getElementById("ln").style.border = "1px solid black"
    }
    
    if(valnum==false){
        document.getElementById("fnamee").innerHTML = ""
        document.getElementById("Phone").innerHTML = "Invalid Phone Number"
        document.getElementById("ph").style.border = "1px solid red"
        return false
    }
    else{
        document.getElementById("Phone").innerHTML = ""
        document.getElementById("ph").style.border = "1px solid black"
    }

    return true
}
