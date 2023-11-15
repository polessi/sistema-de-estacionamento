(function () {
    const $ = (query: string): HTMLInputElement | null => 
    document.querySelector(query);

    $("#cadastrar")?.addEventListener("click", () => {
        console.log('aqui');
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa){
            alert("Os nome nome e placa são obrigatórios");
            return;
        }

    });
})();