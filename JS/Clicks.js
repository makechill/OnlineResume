function myHomePage(){
    var r = confirm("Are you sure to go to Home Page")
    if(r==true){
    location.replace("Home.html")
    }
}

function myEducation(){
    var r = confirm("Are you sure to view Education Details")
    if(r==true){                
        location.replace("Education.html")
    }
}

function mySkillSet(){
    var r = confirm("Are you sure to view SkillSet Details")
    if(r==true){ 
    location.replace("SkillSet.html")
    }
}

function myProjectDetails(){
    var r = confirm("Are you sure to view Project Details")
    if(r==true){ 
    location.replace("ProjectDetails.html")
    }
}

function myPersonalDetails(){
    var r = confirm("Are you sure to view Personal Details")
    if(r==true){ 
    location.replace("PersonalDetails.html")
    }
}
