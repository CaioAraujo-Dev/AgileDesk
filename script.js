// validação de login


const form = document.getElementById("login-form");  
const erroDiv = document.getElementById("erro");
const erroP = erroDiv.querySelector("p");

//acessar os inputs
const user = document.getElementById("login-usuario");
const password = document.getElementById("login-senha");

form.addEventListener("submit", function(event){
    event.preventDefault();  //impede que a página recarregue

    // acessar o valor dos input e remove os espaços
    const userValue = user.value.trim();
    const passwordValue = password.value.trim();

    //verificar se algum campo está vazio
    if(userValue === "" || passwordValue === ""){
        erroP.textContent = "Por favor, preencha todos os campos!";
        erroDiv.style.display = "flex"; // mostra a div
    }else{
        erroDiv.style.display = "none";
        console.log("Usuário:", userValue)
        console.log("Senha:", passwordValue)
    }
  
});

function esconderErro(){
    erroDiv.style.display="none";
}
user.addEventListener("input", esconderErro);
password.addEventListener("input", esconderErro);




