///API Call Using Js

async function Apicall(){
    try{
    const res = await fetch('https://66e526c95cc7f9b6273c697f.mockapi.io/test/vs/user')
    const data = await res.json();
    console.table(data);
    

    const userhtml = data.map( user => {
        return `
        <p> Name : <strong>${user.name}</strong> </p>
        <p> Index : ${user.id} </p>
    
        <p> Active : ${user.isActive} </p>
        <br>`
    });

    document.getElementById('print').innerHTML = userhtml.join('');
   


        }
    catch(error){
        console.log(error +  "on the server");
    }
    
}

// async function API(){
//     const apidata = await Apicall();
//     console.table(apidata);
// }



Apicall();