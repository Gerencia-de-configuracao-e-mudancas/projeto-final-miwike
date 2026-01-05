let barrapesquisa = document.getElementById('barra-de-pesquisa')
let stylebonuses = document.getElementById('style-bonuses')
let bonusestilo = null;
fetch('ArquivosJSON/style-bonuses.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(bonustyle){
        bonusestilo = bonustyle
        adicionar_items()
    })


    function adicionar_items(){

        if (bonusestilo === null) return;
        if(barrapesquisa.value === ''){
            stylebonuses.innerHTML = '';
            for(let x = 0; x < bonusestilo.length;x++){
                let nome = document.createElement('div')
                let conteudo = document.createElement('div')
                let stylebonus = document.createElement('div')
                let titulo = document.createElement('h2')
                stylebonus.classList.add('stylebonus')
                nome.classList.add('name')
                conteudo.classList.add('info')
                titulo.textContent = bonusestilo[x].nome
                conteudo.textContent = bonusestilo[x].conteudo
                stylebonuses.appendChild(stylebonus)
                stylebonus.appendChild(nome)
                stylebonus.appendChild(conteudo)
                nome.appendChild(titulo)
            }
        }
        else{
            stylebonuses.innerHTML = '';
            for(let x = 0; x < bonusestilo.length;x++){
                if (bonusestilo[x].nome.includes(barrapesquisa.value)){
                    let nome = document.createElement('div')
                    let conteudo = document.createElement('div')
                    let stylebonus = document.createElement('div')
                    let titulo = document.createElement('h2')
                    stylebonus.classList.add('stylebonus')
                    nome.classList.add('name')
                    conteudo.classList.add('info')
                    titulo.textContent = bonusestilo[x].nome
                    conteudo.textContent = bonusestilo[x].conteudo
                    stylebonuses.appendChild(stylebonus)
                    stylebonus.appendChild(nome)
                    stylebonus.appendChild(conteudo)
                    nome.appendChild(titulo)
                }
            }
        }
    }

barrapesquisa.addEventListener('input', adicionar_items)