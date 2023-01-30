const users=[
{fname:"Akshay",lname:"chhabra",age:23},
{fname:"Aryan",lname:"khanna",age:25}
]

const arr=[2,3,4,5,6,7,7,8,8]


let out=users.map((x)=>x.fname+" "+x.lname)
console.log(out)

let out1=users.filter((x)=>x.age>23)
console.log(out1)

let out2=arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0)
console.log(out2)


let out3=users.filter((x)=>x.age>22)
.reduce(function(acc,curr){ent => {
        
    });
})