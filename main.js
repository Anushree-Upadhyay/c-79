arrayname=[];

function submit() {
    
    var name1=document.getElementById("stu1").value;
    var name2=document.getElementById("stu2").value;
    var name3=document.getElementById("stu3").value;
    var name4=document.getElementById("stu4").value;
    
    arrayname.push(name1);
    arrayname.push(name2);
    arrayname.push(name3);
    arrayname.push(name4);
   
    console.log(arrayname);
    
    document.getElementById("displayname").innerHTML=arrayname;
    document.getElementById("submitbutton").style.display="none";
    
    document.getElementById("sortbutton").style.display="inline-block";
}

function sorting() {

    arrayname.sort() 
    
    console.log(arrayname);

    document.getElementById("displayname").innerHTML=arrayname;

}