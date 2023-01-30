import { timeStamp } from "console";
import fetch from 'node-fetch';
const word = "https://api.agify.io?name=bella";
function setup(){
    temp()
    .then(results => console.log(`I am in promise ${results.name}`))
    .catch(err =>console.log(err))
    
 }
// function setup(){
//     temp()
//     .then(results => {
//         console.log(`I am in promise ${results.name}`)
//         return temp()
//     })
//     .then(results => console.log(`i am in second then ${results.name}`))
//     .catch(err =>console.log(err))
    
// }
async function temp() {
    let response1=await fetch(word)
    let json1=await response1.json()
    return{
        name:json1.name
    }
    
    
}
setup()


