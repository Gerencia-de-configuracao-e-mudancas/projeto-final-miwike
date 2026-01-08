let inimigos_container = document.getElementById('inimigos')
let inimigo_info_container = document.getElementById('detalhes-inimigos')
let lista_inimigos = null

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

function listar_inimigos(){
    inimigos_container.innerHTML = ''
    for(let x = 0; x < lista_inimigos.length;x++){
        let caixa = document.createElement('div')
        let enemy_icon = document.createElement('button')
        enemy_icon.type = "button"
        caixa.classList.add('shell')
        enemy_icon.classList.add('enemy-icon')
        enemy_icon.style.backgroundImage = `url(${lista_inimigos[x].icon})`
        enemy_icon.id = x
        enemy_icon.onclick = carregar_inimigo
        inimigos_container.appendChild(caixa)
        caixa.appendChild(enemy_icon)
    }
}