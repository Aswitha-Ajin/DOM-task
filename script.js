var firstname=createtask("task","for","firstname","Firstname");
var br1=linebreak("br")
var inputfirst=inputtask("input","type","firstname","id","firstname");
var br2=linebreak("br")
var lastname=createtask("task","for","lastname","Lastname");
var br3=linebreak("br")
var inputlast=inputtask("input","type","lastname","id","lastname");
var br4=linebreak("br")
var email=createtask("task","for","email","email");
var br5=linebreak("br")
var inputemail=inputtask("input","type","email","id","email");
var br6=linebreak("br")
var Phonenumber=createtask("task","for","phonenumber","Phone number");
var br7=linebreak("br")
var inputnumber=inputtask("input","type","phone number","id","phonenumber");
var br8=linebreak("br")
var button=createtask("button","type","button","Click me");
document.body.append(firstname,br1,inputfirst,br2,lastname,br3,inputlast,br4,email,br5,inputemail,br6,Phonenumber,br7,inputnumber,br8,button);

function createtask(taskname,attritag,attricontent,value){
var task=document.createElement(taskname);
task.setAttribute(attritag,attricontent);
task.innerHTML=value;
return task;
}
function inputtask(taskname,attritag,attricontent,attritag1,attricontent1){
    var input=document.createElement(taskname);
    input.setAttribute(attritag,attricontent);
    input.setAttribute(attritag1,attricontent1);
    return input;

}
function linebreak(breaker){
    var br1=document.createElement(breaker);
    return br1;
}


