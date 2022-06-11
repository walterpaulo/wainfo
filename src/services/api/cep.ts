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
    if(cep.length == 8){
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            flogradouroInput.value = data.logradouro
            fcomplementInput.value = data.complemento
            fcityInput.value = data.localidade
            fufInput.value = data.uf
        })
        .catch(error => {
            // handle the error
            // console.error("error no CEP")
        });
    }
}