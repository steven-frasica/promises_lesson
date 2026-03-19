// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email");
// console.log("emailRef", emailRef);

// Then gives us a callback fn and we get a response, unusable at first,
// use .json() to make it readable
// that's another promise, so we use .then on response.json() too
// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//   response.json().then(data => {
//     emailRef.innerHTML = data.email
//   });
// });

// console.log(1)
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(2);
//     emailRef.innerHTML = data.email
//   });
// console.log(3)

// 2. Async/Await

// create async function, add async before function keyword
/* 
  response.json() makes it readable for frontend
  can await the response.json() to make it readable to the frontend
*/
// async function main() {
//   console.log(1)
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//   console.log(2)
//   const data = await response.json()
//   console.log(3)
//   console.log(data)
//   emailRef.innerHTML = data.email
// }

// main()

// Creating a promise


const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("FREE");
    }, 2000);
  });
}


// we can see the promise
console.log(getSubscriptionStatus());

// .then method, only need response.json() when talking to backend, this is only frontend
// getSubscriptionStatus().then((response) => console.log(response));

// use async await to unlock what's in the promise
async function main() {
  const status = (await getSubscriptionStatus());
  statusRef.innerHTML = status
  console.log(status)
  try {
    videoRef.innerHTML = await getVideo(status)
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
  }
}

// gives us VIP in the console
main();

/**
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new Promise inside of the function that:
 *    - if "VIP" resolve("show video")
 *    - if "FREE" resolve("show trailer")
 *    - otherwise reject("no video")
 * 4. console.log the result of getVideo() in main()
 *
 */

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video")
    } else if (subscriptionStatus === "FREE") {
      resolve("show trailer")
    } else {
      reject("no video")
    }
  })
}


async function main() {
  const status = (await getSubscriptionStatus());
  statusRef.innerHTML = status
  console.log(status)
  try {
    videoRef.innerHTML = await getVideo(status)
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
  }
}

main();