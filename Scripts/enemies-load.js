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



function adicionar_inimigo(x){
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

function listar_inimigos(){
    inimigos_container.innerHTML = ''
    if(filtrar_por.value === '' || filtrar_por.value === 'Todos'){
        for(let x = 0; x < lista_inimigos.length;x++){
            adicionar_inimigo(x)
        }
    }
    else if(filtrar_por.value ==='Husk'){
        for(let x = 0; x < lista_inimigos.length;x++){
            if(lista_inimigos[x].tipodeinimigo === 'Husk'){adicionar_inimigo(x)}
        }
    }
    else if(filtrar_por.value ==='Demônio'){
        for(let x = 0; x < lista_inimigos.length;x++){
            if(lista_inimigos[x].tipodeinimigo === 'Demônio'){adicionar_inimigo(x)}
        }
    }
    else if(filtrar_por.value ==='Máquina'){
        for(let x = 0; x < lista_inimigos.length;x++){
            if(lista_inimigos[x].tipodeinimigo === 'Máquina'){adicionar_inimigo(x)}
        }
    }
    else if(filtrar_por.value ==='Anjo'){
        for(let x = 0; x < lista_inimigos.length;x++){
            if(lista_inimigos[x].tipodeinimigo === 'Anjo'){adicionar_inimigo(x)}
        }
    }
    else if(filtrar_por.value ==='Boss'){
        for(let x = 0; x < lista_inimigos.length;x++){
            if(lista_inimigos[x].tipodeinimigo === 'Boss'){adicionar_inimigo(x)}
        }
    }
    else if(filtrar_por.value ==='Outro'){
        for(let x = 0; x < lista_inimigos.length;x++){
            if(lista_inimigos[x].tipodeinimigo === 'Outro'){adicionar_inimigo(x)}
        }
    }
}

function filtragem(){
    localStorage.setItem('filtrar_por', filtrar_por.value)
    listar_inimigos()
}

filtrar_por.addEventListener('change', filtragem)
