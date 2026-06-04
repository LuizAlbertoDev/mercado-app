function setupListaForm() {
    const form = document.getElementById('lista-form')
    if (!form) return

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const produto = {
            nome: document.getElementById('item').value,
            quantidade: Number(document.getElementById('quantidade').value)
        }

        const lista = getData('produtos-lista')
        lista.push(produto)
        saveData('produtos-lista', lista)

        form.reset()
        renderLista()
    })
}