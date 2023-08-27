document.querySelector('#btPesquisar').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      pesquisarCep
    }
}),

    async function pesquisarCep(){
        const cep = document.querySelector('#cep').value;
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);
        const dados = await resposta.json();

    }


   

    const localidade = dados.localidade
    const bairro = dados.bairro
    const logradouro = dados.logradouro


   console.log(localidade)
   console.log(bairro)
   console.log(logradouro)