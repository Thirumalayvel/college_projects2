//while
let age=0;

function waitTillVoter(){
while(age<=18){
    console.log("age now:"+age);
     age+=1;
}
console.log("success , reached voting age");
}

//waitTillVoter();

for(let i=2;i<21;i+=2){
    console.log(i);
}
let value=1 ;
do{
    console.log("value=1");
    value+=1;
}while(value<=20);

for(let i=21;i<=20;i++){
    console.log("1");
}

let names =['jai','pradeep','ayyanar','venkat','vasanthakumar'];
names[2]="Ayyanar";
console.log(names[-1]);
