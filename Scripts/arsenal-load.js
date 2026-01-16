let arsenal_dados = null
let revolver_piercer = document.getElementById("revolver_piercer")
let revolver_marksman = document.getElementById("revolver_marksman")
let revolver_sharpshooter = document.getElementById("revolver_sharpshooter")
let shotgun_coreeject = document.getElementById("shotgun_coreeject")
let shotgun_pump = document.getElementById("shotgun_pump")
let shotgun_sawed = document.getElementById("shotgun_sawed")
let alternate = "off"

fetch('ArquivosJSON/weapon-content.json')
    .then(function(response){
        return response.json()
    })
    .then(function(dados){
        arsenal_dados = dados
        carregar_arma("revolver_piercer")
        carregar_arma("shotgun_coreeject")
    })

function carregar_arma(id_principal){
    if (!id_principal) {
        return;
    }

    let partes = id_principal.split("_");
    let parte_um = partes[0];
    let parte_dois = partes[1];

    let index = arsenal_dados.findIndex(function(item){
        return id_principal in item;
    });

    if (index === -1) {
        return;
    }

    let dados = arsenal_dados[index];
    
    let title = document.getElementById(`${parte_um}_title`);
    let content = document.getElementById(`${parte_um}_content`);
    let image = document.getElementById(`${parte_um}_image`);
    title.textContent = dados[`${parte_um}_${parte_dois}`];
    content.innerHTML = dados[`conteudo_${parte_dois}`];
    image.src = dados[`imagem_${parte_dois}`];
    
}

revolver_piercer.addEventListener("click", function () {
    carregar_arma("revolver_piercer");
});

revolver_marksman.addEventListener("click", function () {
    carregar_arma("revolver_marksman");
});

revolver_sharpshooter.addEventListener("click", function () {
    carregar_arma("revolver_sharpshooter");
});
shotgun_coreeject.addEventListener("click", function () {
    carregar_arma("shotgun_coreeject");
});

shotgun_pump.addEventListener("click", function () {
    carregar_arma("shotgun_pump");
});

shotgun_sawed.addEventListener("click", function () {
    carregar_arma("shotgun_sawed");
});
