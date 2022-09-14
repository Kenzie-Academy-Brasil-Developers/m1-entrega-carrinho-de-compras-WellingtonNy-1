const productsCart = [
    {
        id: 1,
        name: "Blusa",
        price: 15.00
    },
    {
        id: 2,
        name: "Calça",
        price: 25.00
    },
     {
        id: 3,
        name: "Cueca",
        price: 5.00
    }
]

document.querySelector('body').appendChild(montar())

function montar(){
//somando total
let somando = 0
for (let i = 0; i < productsCart.length; i++) {
    somando += productsCart[i].price 
}
//criando tags
let main = document.createElement("main")
let aside= document.createElement('aside')
let sectionT=document.createElement('section')
let h3 = document.createElement('h3')
let div1 =document.createElement('div')
let h41=document.createElement('h4')
let h42=document.createElement('h4')
let sectionM=document.createElement('section')
let ul=document.createElement('ul')
let sectionB=document.createElement('section')
let div2 =document.createElement('div')
let p3 =document.createElement('p')
let div3 =document.createElement('div')
let button =document.createElement('button')

//add classe
aside.classList.add('containerAside')
sectionT.classList.add('top')
div1.classList.add('itva')
sectionM.classList.add('mid')
div2.classList.add('total')
div3.classList.add('but')

//alimentando tags
h3.innerText='Carrinho de Compras'
h41.innerText='item'
h42.innerText='valor'
p3.innerText=`Total R$:${somando}`
button.innerText='Finalizar Compra'

//montando
main.append(aside)
aside.append(sectionT,sectionM,sectionB)
sectionT.append(h3,div1)
div1.append(h41,h42)
sectionM.append(ul)
sectionB.append(div2,div3)
div2.append(p3)
div3.append(button)


return main
}


let sof= document.querySelector('ul')



function final() {
    for (let i = 0; i < productsCart.length; i++) {
        let pro = productsCart[i]
        sof.append(montarProduto(pro))
    }
}

final()


function montarProduto(pro){
//criando elemento
let li= document.createElement('li')
let p1 =document.createElement('p')
let p2 =document.createElement('p')
//atribuindo classe
li.classList.add('proval')
//alimentando elemento
p1.innerText=`${pro.name}`
p2.innerText=`R$: ${pro.price}`
//montando
li.append(p1,p2)

return li
}





                    // <li class="proval">
                    //    <p>produtos</p><p>R$:</p>
                    // </li>
                    
    