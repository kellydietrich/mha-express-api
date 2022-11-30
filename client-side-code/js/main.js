document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest(){
    const charName = document.querySelector('input').value;
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${charName}`);
        const data = await response.json();

        console.log(data);
        document.querySelector('h2').innerText = data.birthName;
    }catch(error){
        console.log(error);
    }
}