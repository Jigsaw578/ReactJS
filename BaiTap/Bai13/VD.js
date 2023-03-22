// let happy = (mess) =>{
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             if (mess === 'Yes') {
//                 resolve('Em dong y')
//             } else {
//                 reject(new Error ('Em khong dong y'))
//             }   
//         }, 5000)
//     })
// }
// happy('yes').then(result =>{
//     console.log(result);
// })

// async function hello(){
//     return "hello world"
// }
// hello().then ((res) =>{console.log(res);})


    let promise = new Promise((res, rej) =>{
        setTimeout(() =>{rej( new Error("done")),1000})
    })
    promise.finally(() =>{
        console.log('me thang vinh');
    }).catch(err =>{console.log((err));})
