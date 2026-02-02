// //sync code
console.log("one");
console.log("two");
console.log("three");

// // async code
setTimeout(() => {
  console.log("hello subham i am coming in 5 sec");
}, 5000);

function namee() {
  console.log("subham");
}
setTimeout(namee, 3000);

// // callback = A callback is a function passes as an argument to another function..
function sum(a, b) {
  console.log(a + b);
}

function calc(a, b, sumCallback) {
  sumCallback(a, b);
}
calc(1, 2, sum);

// //callback hell = nestes callbacks stacked below one another forming a pyramid structure.
// //this style of programming becomes difficult to understand and manage.
function getdata(dataId, getNextdata) {
  return new Promise((resolve,reject)=>{

    setTimeout(() => {
      // console.log("data", dataId);
      // resolve("sucess")
      reject("error coming soon");
      if (getNextdata) {
        getNextdata();
      }
    }, 6000);
  })
  }
getdata(1, () => {
    console.log("getting data 2....")
  getdata(2, () => {
    console.log("getting data 3....")
    getdata(3, () => {
        console.log("getting data 4....")
      getdata(4);
    });
  });
});

//promises = 
/*it is for "eventual" completion of task.it is an object in js. it is 
 solution to callback hell.*/
//  let promise = new Promises((resolve,reject)=> {..})

const getPromise = ()=>{
  return new Promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve("123");
    reject("hehe")
  });
};

let promise= getPromise();
promise.then((res)=>{
  console.log("hello i am subham",res);
})
promise.catch((err)=>{
  console.log("hello",err)
})

// promise chain
function asyn1(){
  return new Promise((resolve,rejected)=>{
    setTimeout(()=>{
      console.log("hello");
      resolve("data1");
    },4000)
  })
}
function asyn2(){
  return new Promise((resolve,rejected)=>{
    setTimeout(()=>{
      console.log("hello2");
      resolve("data 2");
    },4000)
  })
}
console.log("fetching data 1....");
asyn1().then((res)=>{
  console.log("fetchind data 2...");
  asyn2().then((res)=>{
console.log("",res)
  })


})

/*Async-Await
async function always returns a promise.
async function myfunc(){...}
await pauses the execution of its surrounding async function until the promise is settled*/

 function hello(){
  return new Promise ((resolve,reject)=>{
    console.log("showing data");
    setTimeout(()=>{
      
      
      console.log("hello genz");
    },2000)
  })
  }
async function subham(){
  await hello()
}