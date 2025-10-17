try {
    const form = document.querySelector("form") ?? null;
    const nomeInput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#assunto");
    const mensagemTextarea = document.querySelector
        ("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");

    //validar formulario
    //que o campo do nomme nao seja valido
    //que mensagem nao seja vazia e menos de 500 caracteres

    function validarFormulario(evento) {
        evento.preventDefault();
        let valido = true;
        if(nomeInput.value.trim() === '') {
            valido = false;
            alert("o campo de nome nao pode ser vazio!");
        }

        if (mensagemTextarea.value.trim() === '') {
            valido = false;
            alert("mensagem nao pode ser vazia!")
        } else if (mensagemTextarea.value.trim().length > 500) {
            valido = false;
            alert("mensagem deve ser menor que 500 caracteres");
        }

        if (valido) {
            alert("agradecemos seu contato");
            form.submit();
        }
    }


    enviarBtn.addEventListener('click', validarFormulario);
} catch (exception) {
    console.log(exception.message);
}
