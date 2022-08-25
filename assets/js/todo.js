let data = [/*{
    id: 1,
    title: "Estudar HTML"
}, {
    id: 2,
    title: "Estudar CSS"
}, {
    id: 3,
    title: "Estudar JavaScript"
},{
    id: 4,
    title: "PHP"
}*/]; //array com JSON foi comentado pq o array incia sem nenhum dado


//console.log(data);
function renderTodo(){

    document.querySelector('.todo').innerHTML = '';

    data.forEach(task => {

    let li = document.createElement('li'); // declaração li criando com jquery uma nova tag

    li.innerHTML = `
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}">${task.title}</label>
        <button type="button">x</button>
    `;// para cada elemento, o for each percorre os ID's VIA json

    li.querySelector('input').addEventListener("change", e => {
        
        if(e.target.checked){
            li.classList.add('complete'); // Adiconando a classe css ao elemento li
        }else{
            li.classList.remove('complete'); // removendo a classe
        }
    
    });

    li.querySelector('button').addEventListener('click', e =>{// adiconando o botão
        
      //  console.warn("Você vai deletar este item?"); // menssagem de aviso
     //   console.log(e.target.parentNode.querySelector('input').id.split('-')[1]);// obtendo acesso ao elemento input a parti do botão usando parentNode
        // função split divide o array em duas posições
        let button = e.target;
        let li = button.parentNode;
        let input = li.querySelector('input');
        let id = input.id;
        let idArray =  id.split('-'); // 
        let todoId = idArray[1];
        let title = li.querySelector('label').innerText;

        if (confirm(`deseja realmente excluir a tarefa  ${title}?`)) {
            
            data = data.filter(task => {
                return (task.id !== parseInt(todoId));
            });

            renderTodo();
            
        }// filtro do array buscando pelo Id, convertendo string para inteiro
            // outra alternativa de retorno data = data.filter(task => task.id !== parseInt(todoId));

       
        
           
    });

    document.querySelector('.todo').append(li);

});

}

document.querySelector('#new-task').addEventListener('keyup', e =>{

    //console.log(e);

    if(e.key === 'Enter'){
        console.log(e.target.value); // função que capta valor digitado após apertar a tecla enter

        //Adcionar informações no array utilizando o elemento push
        data.push({
            id: data.length+1,
            title: e.target.value
        });

        e.target.value = "";

        renderTodo();
    }

});

renderTodo(); //chamando o função para renderizar o array e limpar a tela

