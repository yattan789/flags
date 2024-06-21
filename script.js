
async function getfact()
{
    let fact = await fetch( "https://catfact.ninja/fact" );
    // console.log(typeof fact);
    let data = await fact.json();
    //console.log(data);
    return data["fact"]
}
let i = 0;
async function call_fact1()
{
    if( i == 100 ) return;
    let factx = await getfact();
    
    console.log(`waiting to complete ${i} \n`,factx,++i);
    call_fact1();
};

// other method a asyc repose will a promise

// getfact().then( res => 
// {
//     console.log("getting fact1...");
//     console.log(res);
//     getfact().then( res => 
//         {
//             console.log("getting fact2...");
//             console.log(res);
//         });
// });

console.log("getting facts ...");
call_fact1();