let inimigos_container = document.getElementById('inimigos')
let inimigo_info_container = document.getElementById('detalhes-inimigos')
let lista_inimigos = null
let filtrar_por = document.getElementById('opcoes')

if(localStorage.getItem('filtrar_por') === null){
    localStorage.setItem('filtrar_por', '')
}

let valor_selecionado = localStorage.getItem('filtrar_por')
filtrar_por.value = valor_selecionado

fetch('ArquivosJSON/enemies.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        lista_inimigos = data
        listar_inimigos()
    })

function carregar_inimigo(event){
    inimigo_info_container.innerHTML = ''

    const elemento = event.currentTarget
    const id = elemento.id

    inimigo_info_container.innerHTML = lista_inimigos[id].conteudo
}

function adicionar_inimigo(indice){
    let caixa = document.createElement('div')
    let enemy_icon = document.createElement('button')

    enemy_icon.type = "button"
    caixa.classList.add('shell')
    enemy_icon.classList.add('enemy-icon')

    enemy_icon.style.backgroundImage = `url(${lista_inimigos[indice].icon})`
    enemy_icon.id = indice
    enemy_icon.onclick = carregar_inimigo

    inimigos_container.appendChild(caixa)
    caixa.appendChild(enemy_icon)
}

function listar_inimigos(){
    inimigos_container.innerHTML = ''

    let tipo = filtrar_por.value
    let inimigos_filtrados

    if(tipo === '' || tipo === 'Todos'){
        inimigos_filtrados = lista_inimigos
    } else {
        inimigos_filtrados = lista_inimigos.filter(function(inimigo){
            return inimigo.tipodeinimigo === tipo
        })
    }

    inimigos_filtrados.forEach(function(inimigo){
        let indice_real = lista_inimigos.indexOf(inimigo)
        adicionar_inimigo(indice_real)
    })
}

function filtragem(){
    localStorage.setItem('filtrar_por', filtrar_por.value)
    listar_inimigos()
}

filtrar_por.addEventListener('change', filtragem)
