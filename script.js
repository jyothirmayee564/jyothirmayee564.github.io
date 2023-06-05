// alert("Hi,Alert Message");
console.log("Hi,Alert Message");

var data1={image : "recentPic.jpeg",name : "Jyothirmayee Kandiboina", designation:"Student"};
var data2={image : "abc.jpg",name : "Jyothi", designation:"Student"};
var isdata1 = true;
var displaydata;
var changemypic = function(){
    if(isdata1){
        displaydata= data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}