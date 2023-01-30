import { createHash } from 'crypto';
import fetch from 'node-fetch';
import crypto from 'crypto';
import { json } from 'stream/consumers';
import { rejects } from 'assert';
const word = "https://api.agify.io?name=bella";
function setup() {

// SIMPLE PROMISE

//   let promise = fetch(word);
//   promise.then(gotdata);
//   promise.catch(goterror);

//   function gotdata(data: any) {
//     var data= data.json();
//     var json=json.name
//     var cryp=crypto.createHash('sha256',json)
//     .digest('hex')
//     console.log(cryp)

//   }
//   function goterror(err: any) {
//     console.log(err);
//   }

// fetch(word)
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))
// fetch(word)
// .then(data=>data.json())
// .then(json=>console.log(json.name))
// .catch(err=> console.log(err))


// USER DEFINED PROMISE
delay(1000)
.then(data=>console.log('hello'))
.catch(err=>console.log(err))
}
function delay(time:any){
    return new Promise((resolve,reject)=>{
        if(isNaN(time)){
            reject(console.log("not right"))
        }
        setTimeout(resolve,time)
    })




}
setup();


