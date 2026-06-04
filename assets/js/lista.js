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

    lista.forEach(item => {
        const li = document.createElement('li')
        li.textContent = `${item.nome} - Quantidade: ${item.quantidade}`
        listaContainer.appendChild(li)
    })
}

setupListaForm()
renderLista()