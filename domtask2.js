let employes=[
    {
        name:"kiruthi",
        age:20,
        empid:1234
    },
    {
        name:"moni",
        age:21,
        empid:4321
    },
    {
        name:"pavi",
        age:18,
        empid:9870
    },
    {
        name:"esther",
        age:20,
        empid:3412
    },
    {
        name:"lotus",
        age:16,
        empid:4567
    }
];

let mydiv=document.getElementById("mydiv")
console.log(mydiv);
mydiv.style.border=("1px solid red");
mydiv.style.padding="20px";

let whdiv=document.createElement("div")
mydiv.appendChild(whdiv);
whdiv.className="whdiv"


employes.map((emp,index)=>{
    
    let bluediv=document.createElement("div");
    whdiv.appendChild(bluediv)
    bluediv.className=`blue emp${index+1}`;


    let name=document.createElement("h2");
    name.innerHTML=`Name : ${emp.name}`;
    bluediv.appendChild(name);
    
    let age=document.createElement("h2");
    age.innerHTML=`Age : ${emp.age}`;
    bluediv.appendChild(age);

    let id=document.createElement("h2");
    id.innerHTML=`Id : ${emp.empid}`;
    bluediv.appendChild(id);

    let btn=document.createElement("button")
    bluediv.appendChild(btn);
    btn.innerHTML="DELETE";
    btn.className=`btn mybtn${index+1}`


    let display=()=>{
         whdiv.removeChild(bluediv);
    }
    btn.addEventListener("click",display);
});

let btn2=document.createElement("button");
btn2.innerHTML="clearall";
mydiv.appendChild(btn2);
btn2.className="btn"


let display2=()=>{
    mydiv.removeChild(whdiv);
}
btn2.addEventListener("click",display2);

