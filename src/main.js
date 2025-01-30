import productos from './db/productos'
import './sass/main.scss'

console.log(productos) // array Productos

const contenedorProductos = document.getElementById('container-productos')
console.log(contenedorProductos)

const start3 = () => {

    const fragmento = document.createDocumentFragment()

    productos.forEach(prod => {
        const card = document.createElement('div')
        card.classList.add('card')
        // console.log(card)
        const articulo = document.createElement('article')
        articulo.classList.add('card__article')
        //console.log(articulo)
        card.appendChild(articulo)
        //console.log(card)
        const cardImageContainer = document.createElement('div')
        cardImageContainer.classList.add('card__image-container')
        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = prod.foto
        foto.alt = prod.nombre
        cardImageContainer.appendChild(foto)
        // console.log(cardImageContainer)
        articulo.appendChild(cardImageContainer)
        //console.log(card)

        /* <div>
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
                    </div> */

        const cardContent = document.createElement('div')
        const h2Titulo = document.createElement('h2')
        h2Titulo.classList.add('card__heading')
        h2Titulo.textContent = prod.nombre
        //console.log(h2Titulo)
        const cardDescripcion = document.createElement('div')
        cardDescripcion.classList.add('card__description')
        const parrafo = document.createElement('p')
        parrafo.textContent = prod.descripcion
        //console.log(parrafo)
        cardContent.appendChild(h2Titulo)
        cardDescripcion.appendChild(parrafo)
        cardContent.appendChild(cardDescripcion)
        articulo.appendChild(cardContent)

        // ----------------------------------------------- 
        //!  FORMULARIO                                     
        // ----------------------------------------------- 

        const form = document.createElement('form')
        form.classList.add('card__form')
        cardContent.appendChild(form)
        const formContainer = document.createElement('div')
        formContainer.classList.add('card__form-container')
        form.appendChild(formContainer)

        const labelBlanca = document.createElement('label')
        labelBlanca.htmlFor = 'salsaBlanca'
        labelBlanca.classList.add('card__form-input-container')
        labelBlanca.classList.add('pasta')
        labelBlanca.textContent = 'Selecciona la salsa:'
        formContainer.appendChild(labelBlanca)
        // console.log(labelBlanca)

        const salsaBlanca = document.createElement('input')
        salsaBlanca.id = 'salsaBlanca'
        salsaBlanca.type = 'radio'
        salsaBlanca.classList.add('card__form-input')
        salsaBlanca.textContent = 'Salsa Blanca'
        labelBlanca.appendChild(salsaBlanca)
        //console.log(formContainer)

        const labelRoja = document.createElement('label')
        labelRoja.htmlFor = 'salsaBolo'
        labelRoja.classList.add('card__form-input-container')
        labelRoja.classList.add('pasta')
        formContainer.appendChild(labelRoja)




        const labelSg = document.createElement('label')
        labelSg.htmlFor = 'salsaBlanca'
        labelSg.classList.add('card__form-input-container')
        labelSg.classList.add('no-pasta')
        labelSg.textContent = 'Selecciona la guarnición:'
        formContainer.appendChild(labelSg)




        const labelPapas = document.createElement('label')
        labelPapas.htmlFor = 'salsaBlanca'
        labelPapas.classList.add('card__form-input-container')
        labelPapas.classList.add('no-pasta')
        formContainer.appendChild(labelPapas)




        const labelPure = document.createElement('label')
        labelPure.htmlFor = 'salsaBlanca'
        labelPure.classList.add('card__form-input-container')
        labelPure.classList.add('pasta')
        formContainer.appendChild(labelPure)




        const labelEnsalada = document.createElement('label')
        labelEnsalada.htmlFor = 'salsaBlanca'
        labelEnsalada.classList.add('card__form-input-container')
        labelEnsalada.classList.add('pasta')
        formContainer.appendChild(labelEnsalada )



 /*  <form action="" class="card__form">
      <div class="card__form-container"> 
       ? <label for="salsaBlanca" class="card__form-input-container pasta" >Selecciona la salsa:
          *  <input ID="salsaBlanca" type="radio" class="card__form-input"> Salsa Blanca
          </label>
       ?   <label for="salsaBolo" class="card__form-input-container pasta">
          *  <input ID="salsaBolo" type="radio" class="card__form-input"> Salsa Bolognesa
          </label>
       ?   <label for="sg" class="card__form-input-container no-pasta" >Selecciona la guarnicion:
          *  <input ID="sg" type="radio" class="card__form-input"> Sin guar.
          </label>
       ?   <label for="papas" class="card__form-input-container no-pasta">
          *  <input ID="papas" type="radio" class="card__form-input"> Papas fritas
          </label>
       ?   <label for="pure" class="card__form-input-container no-pasta">
          *  <input ID="pure" type="radio" class="card__form-input"> Puré 
          </label>
       ?   <label for="ensalada" class="card__form-input-container no-pasta">
          *  <input ID="ensalada" type="radio" class="card__form-input"> Ensalada
          </label>
      </div>
        </form> */

        console.log(cardContent)
        //console.log(card)
        fragmento.appendChild(card)


    })

    console.log(fragmento) // Los 5 div.card


    // Intervengo una sola vez el DOM. Evitando la recarga del html
    contenedorProductos.appendChild(fragmento)


}

//                          evento        | callback
window.addEventListener('DOMContentLoaded', start3) /* se dispara cuando todo el html fue leido (cargado) */

