let lista = [
    {
        Image: '/assets/img/actions/animewoman.jpg',
        Name: 'animewoman',
        Price: 150,
        type: 'figure'
    },
    {
        Image: '/assets/img/actions/dragonballpersonagem.jpg',
        Name: 'dragonballpersonagem',
        Price: 150,
        type: 'figure'
    },
    {
        Image: '/assets/img/actions/starwarspersonagem.jpg',
        Name: 'starwarspersonagem',
        Price: 150,
        type: 'figure'
    },
    {
        Image: '/assets/img/painting/clock.jpg',
        Name: 'nome frames1',
        Price: 150,
        type: 'quadro'
    },
    {
        Image: '/assets/img/painting/gamepad.jpg',
        Name: 'nome frames2',
        Price: 150,
        type: 'quadro'
    },
    {
        Image: '/assets/img/painting/personagem.jpg',
        Name: 'nome frames3',
        Price: 150,
        type: 'quadro'
    }
];


let listFrames = [];    //figure
let listFigures = []; // quadros

console.log(lista.length)



function separateItens(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].type == 'figure') {
            listFrames.push(lista[i])
        }else if(lista[i].type == 'quadro'){
            listFigures.push(lista[i])
        }
    }
}
separateItens(lista)


console.log(listFrames)
console.log(listFigures)

let secaolistFigure = document.getElementsByClassName('filme-info')[0]

console.log(lista)



function listaProdutos1(lista) {
    let listaFilmes = document.querySelector('.listaFilmes')

    for (let i = 0; i < lista.length; i++) {
        let filme = lista[i]

        let ulFilme = document.createElement('ul')
        ulFilme.classList.add('filme-info')
        listaFilmes.appendChild(ulFilme)

        let liFilme = document.createElement('li')
        
        let img = document.createElement('img')
        img.src = lista[i].Image
        img.alt = lista[i].Name
        img.classList.add('cards')

        ulFilme.appendChild(img)
        
 //       listaFilmes.appendChild(ulFilme)

            /* Nome */
        let liName = document.createElement('li')
        liName.innerHTML = lista[i].Name
        ulFilme.appendChild(liName)
            /* Preço */
        let liprice = document.createElement('li')
        liprice.innerHTML = lista[i].Price
        ulFilme.appendChild(liprice) 
    }
}

listaProdutos1(listFrames)


function listaProdutos2(lista) {
    let listaFilmes = document.querySelector('.listaFilmes1')

    for (let i = 0; i < lista.length; i++) {
        let filme = lista[i]

        let ulFilme = document.createElement('ul')
        ulFilme.classList.add('filme-info')
        listaFilmes.appendChild(ulFilme)

        let liFilme = document.createElement('li')
        
        let img = document.createElement('img')
        img.src = lista[i].Image
        img.alt = lista[i].Name
        img.classList.add('cards')

        ulFilme.appendChild(img)
        
 //       listaFilmes.appendChild(ulFilme)

            /* Nome */
        let liName = document.createElement('li')
        liName.innerHTML = lista[i].Name
        ulFilme.appendChild(liName)
            /* Preço */
        let liprice = document.createElement('li')
        liprice.innerHTML = lista[i].Price
        ulFilme.appendChild(liprice) 
    }
}

listaProdutos2(listFigures)
