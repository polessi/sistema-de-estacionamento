interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date;
}

(function () {
    const $ = (query: string): HTMLInputElement | null => 
    document.querySelector(query);

    function patio(){
        function ler(){}

        function adicionar(){}

        function remover(){}

        function salvar(){}

        function render(){}

        return { ler, adicionar, remover, salvar, render }

    }

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