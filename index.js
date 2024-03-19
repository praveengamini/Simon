 result1 =[]  
 result2=[]
 function blinkFunction() {
    var a = Math.floor(Math.random() * 4) + 1;
    var color;
    switch (a) {
        case 1:
            color = "red";
            result1.push(color);
            break;
        case 2:
            color = "blue";
            result1.push(color);
            break;
        case 3:
            color = "green";
            result1.push(color);
            break;
        case 4:
            color = "yellow";
            result1.push(color);
            break;
    }
    var x = document.getElementById(color);
    x.classList.add("blink");
    setTimeout(function () {
        x.classList.remove("blink");
    },400);
}
 function check()
 {
    console.log(result1);
    console.log(result2);
    for (var i = 0; i < result1.length; i++) {
        if(result1[i]===result2[i])
        {
            continue;
        }
        else{
            return false;
        }
   }
   console.log("true");
   return true;
}
var j=0;
function red(){
    result2.push("red");
    j++;
    if(j===result1.length)
    {
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="Level"+"-"+j;
            result2=[];
            j=0;
            blinkFunction();
            
        }
        else
        {
            document.getElementById("result").innerHTML="You lost!";
        }
    }
}
function yellow()
{
    result2.push("yellow");
    j++;
    if(j===result1.length)
    {
        
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="Level"+"-"+j;
            result2=[];
            j=0;
            blinkFunction();
            
        }
        else
        {
            document.getElementById("result").innerHTML="You lost!";
        }
    }
}
function green()
{
    result2.push("green");
    j++;
    if(j===result1.length)
    {
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="Level"+"-" +j;
            result2=[];
            j=0;
            blinkFunction();
           
        }
        else
        {
            document.getElementById("result").innerHTML="You lost!";
        }
    }
}
function blue()
{
    result2.push("blue");
    j++;
    if(j===result1.length)
    {
        var mainresult = check();
        if(mainresult===true)
        {
            document.getElementById("result").innerHTML="Level"+"-" +j;
            result2=[];
            j=0;
            blinkFunction();
           
        }
        else
        {
            document.getElementById("result").innerHTML="You lost!";
        }
    }

}
function start()
{
    result1=[]
    result2=[]
    j=0;
    document.getElementById("result").innerHTML="Level-0";
    blinkFunction();
}
function questionmark() {
    var x = document.getElementById("instructions");
    x.classList.toggle("instructionsvis"); 
}