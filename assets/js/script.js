console.log('olá mundo');

let email = 'joaorangel@hcode.com.br';

email = 'glaucio@hcode.com.br';

console.log(email);
console.log('O seu e-mail é: ' + email);
//console.log(´O seu e-mail é: $(email)´);

document.getElementById('btn-submit').addEventListener('click', e =>{
    console.log('O botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter',e =>{
    console.log('O botão está sobre o formularío!');
});

document.querySelector('#form-login').addEventListener('mouseleave', e=>{
    console.log('O mouse está fora do formulario');
});

document.querySelector('#form-login').addEventListener('submit', e=>{
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };

    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);

  
    /*
        if(json.email !== ""){

            console.log("O campo foi preenchido!");
        }
    */

    if (!json.email){

        console.error("O campo deve ser preenchido!");
    
    } else if (!json.password){

        console.error("O campo de password deve ser preenchido!");

    } else {

        console.info("Dados validados com sucesso!");

    }



});

