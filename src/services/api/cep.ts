interface ICEP { 
    cep: string, 
    logradouro: string,
    complemento: string, 
    bairro: string,
    localidade: string, 
    uf: string,
    ddd: string, 
}


export const getAddress:any = async (cep:string) => {
    const apiUrl =`https://viacep.com.br/ws/${cep}/json`;
    
    const flogradouroInput:any = document.querySelector("#iflogradouro");
    const fcomplementInput:any = document.querySelector("#ifcomplement");
    const fcityInput:any = document.querySelector("#ifcity");
    const fufInput:any = document.querySelector("#ifuf");

    flogradouroInput.value = ''
    fcomplementInput.value = ''
    fcityInput.value = ''
    fcityInput.value = ''
    fufInput.value = ''

    const cepNovo = apiUrl

    if(cep.length === 8 && !cep.match("-")){
        const response = await fetch(cepNovo)
        const data = await response.json();

        if(data.erro ==='true'){
    
         return;
        }

        flogradouroInput.value = data.logradouro
        fcomplementInput.value = data.complemento
        fcityInput.value = data.localidade
        fufInput.value = data.uf

    }
}