//   .then(response => response.json())
//   // response.id to access inferenceid to plug into uri when we make the get request
//   .then((response) => {
//     console.log("POST request response: ",response)
//     result = response.id
//   })
//   .catch(err => console.error(err));
//   const result = fetch('https://api.tryleap.ai/api/v1/images/models/eab32df0-de26-4b83-a908-a83f3015e971/inferences', options1)
//     .then(response => response.json())
//     .then(data=>{
//       return setTimeout(fetch(`https://api.tryleap.ai/api/v1/images/models/eab32df0-de26-4b83-a908-a83f3015e971/inferences/${data.id}`, options2)
//       .then(response => response.json())
//       , 10000)
//     })
//     .catch(err =>{
//       console.log(err)
//     })
//     result.then(r=>{
//       console.log(r)
//     })
  
//   try {
//       const response = await fetch('https://api.tryleap.ai/api/v1/images/models/eab32df0-de26-4b83-a908-a83f3015e971/inferences', options1);
//       const result = await response.json();
//       const resultId = await result.id;
//       const response1 = await fetch(`https://api.tryleap.ai/api/v1/images/models/eab32df0-de26-4b83-a908-a83f3015e971/inferences/${resultId}`, options2); 
//       const data = await response1.json();
//       console.log("GET request response: ", data)
//     } catch (err) {
//       console.log(err)
//     }