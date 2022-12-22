function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', './assets/bebeM.png')
            }else if (idade > 21 && idade <= 40) {
                //jovem
                img.setAttribute('src', './assets/jovemM.png')
            } else if (idade <= 59) {
                //adulto
                img.setAttribute('src', './assets/adultoM.png')
            } else {
                //idoso
                img.setAttribute('src', './assets/idosoM.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', './assets/bebeF.png')
            }else if (idade > 21 && idade <= 40) {
                //jovem
                img.setAttribute('src', './assets/jovemF.png')
            } else if (idade <= 59) {
                //adulto
                img.setAttribute('src', './assets/adultoF.png')
            } else {
                //idoso
                img.setAttribute('src', './assets/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
