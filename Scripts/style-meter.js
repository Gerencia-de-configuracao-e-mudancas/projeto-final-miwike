let barrapesquisa = document.getElementById('barra-de-pesquisa')
let stylebonuses = document.getElementById('style-bonuses')
let bonusestilo = null;

fetch('ArquivosJSON/style-bonuses.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(bonustyle){
        bonusestilo = bonustyle;
        adicionar_items();
    });

function adicionar_items(){

    if (bonusestilo === null) return;

    stylebonuses.innerHTML = '';

    for (let x = 0; x < bonusestilo.length; x++) {

        let termo = barrapesquisa.value.toLowerCase();
        let nomeBonus = bonusestilo[x].nome.toLowerCase();

        if (termo === '' || nomeBonus.includes(termo)) {

            let nome = document.createElement('div');
            let conteudo = document.createElement('div');
            let stylebonus = document.createElement('div');
            let titulo = document.createElement('h2');

            stylebonus.classList.add('stylebonus');
            nome.classList.add('name');
            conteudo.classList.add('info');

            titulo.textContent = bonusestilo[x].nome;
            conteudo.textContent = bonusestilo[x].conteudo;

            nome.appendChild(titulo);
            stylebonus.appendChild(nome);
            stylebonus.appendChild(conteudo);
            stylebonuses.appendChild(stylebonus);
        }
    }
}

barrapesquisa.addEventListener('input', adicionar_items);
