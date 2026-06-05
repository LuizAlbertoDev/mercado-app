function setupListaForm() {
    const form = document.getElementById('lista-form')
    if (!form) return

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const produto = {
            nome: document.getElementById('item').value,
            quantidade: Number(document.getElementById('quantidade').value)
        }

        const lista = getData('lista-produtos')
        lista.push(produto)
        saveData('lista-produtos', lista)

        form.reset()
        renderLista()
    })
}

function renderLista(){
    const listaContainer = document.getElementById('lista-produtos')
    if(!listaContainer) return

    const lista = getData('lista-produtos')  // declara primeiro

    listaContainer.innerHTML = ''

    if (lista.length === 0) {               // usa depois
        listaContainer.innerHTML = '<p>Nenhum produto na lista.</p>'
        return
    }

    lista.forEach((item, index) => {
        const li = document.createElement('li')

        li.innerHTML = `${item.nome} - Quantidade: ${item.quantidade} <button class="btn btn--danger btn--sm">Remover</button>`

        const botao = li.querySelector(".btn--danger")

        botao.addEventListener("click", ()=> {
            deleteProduto(index)
        })
        
        listaContainer.appendChild(li)
        
    })
}

function deleteProduto(index) {
    const lista = getData(`lista-produtos`)
    lista.splice(index,1)
    saveData(`lista-produtos`,lista)
    renderLista()
}

setupListaForm()
renderLista()