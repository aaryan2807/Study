let name1={
    fname:"aryan",
    lname:"khanna"
}
let printFullName=function(city,state){
    console.log(this.fname+" "+this.lname+" is from "+city+","+state)
}
let name2={
    fname:"qwerty",
    lname:"asdfg"

}
printFullName.call(name1,"Amritsar","Punjab")
printFullName.apply(name2,["XYZ","PQR"])
let bind_var=printFullName.bind(name1,"amritsar","punjab")
bind_var()