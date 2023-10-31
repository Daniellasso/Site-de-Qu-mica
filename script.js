function esconderDiv(){
    let estrutura = document.getElementById("estrutura_atomica")
}

function ocultar_divs() {
    ocultar_div("tela_cadastro")
    ocultar_div("tela_listar")
    ocultar_div("tela_remover")
    ocultar_div("tela_editar")
}

function ocultar_div(id_div){
    document.getElementById(id_div).style.display = "none"
}

function mostrar_div(id_div) {
    document.getElementById(id_div).style.display = "flex"
}

function extrutura_atomica() {
    document.getElementById("extrutura_atomica").style.display = "none"
}



function toggleMenu() {
    var menu = document.getElementById("menu");
    var button = document.getElementById("menu-button");
    var icon = document.createElement("i");
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        button.textContent = "";
        icon.className = "fa-solid fa-x"; // Substitua "x" pelo nome do ícone desejado
        icon.style.color = "#000000"; // Defina a cor do ícone, se necessário
        icon.style.fontSize = "16px"; // Ajuste o tamanho do ícone
        button.appendChild(icon);
    } else {
        menu.style.display = "none";
        button.textContent = "";
        icon.className = "fa-solid fa-bars"; // Substitua "x" pelo nome do ícone desejado
        icon.style.color = "#000000"; // Defina a cor do ícone, se necessário
        button.appendChild(icon);
    }
    extrutura_atomica()
}


document.getElementById("mostrarDiv").addEventListener("click", function() {
    // Obtém a div com o id "estrutura_atomica"
    let divEstruturaAtomica = document.getElementById("estrutura_atomica");
    
    // Verifica se a div está oculta
    if (divEstruturaAtomica.style.display === "none") {
        // Mostra a div
        divEstruturaAtomica.style.display = "block";
    } else {
        // Esconde a div
        divEstruturaAtomica.style.display = "none";
    }
});

document.getElementById("mostrarLigacoesQuimicas").addEventListener("click", function() {
    // Obtém a div com o id "ligações_quimicas"
    let divLigacoesQuimicas = document.getElementById("ligações_quimicas")
    // Verifica se a div está oculta
    if (divLigacoesQuimicas.style.display === "none") {
        // Mostra a div
        divLigacoesQuimicas.style.display = "block";
    } else {
        // Esconde a div
        divLigacoesQuimicas.style.display = "none";
    }
});