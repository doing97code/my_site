// function abcd(){
//     fetch('https://randomuser.me/api/')
//     .then(function(raw){
//         return(raw.json())
//     }).then(function(data){
//         console.log(data.results[0].email);
//     })
// }
// abcd()


// orrrrrrrrrrrrrrrrrrrrrrrrrrr  or you can use

 

async function efgh(){
   const num=await fetch('https:// randomuser.me/api/')
   console.log(await(num.json()));

}
efgh();



