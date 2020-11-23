//My api key
var page = 1;
var lim = 5;
var cont = 0;

const apiTool = {
    key: 'ec826f6d-4245-4135-ae02-469ceb32ac14',
    start: `&start=${page}`,
    limit: `&limit=${lim}`

}

//GET Fetch Requisition
 fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiTool.key + apiTool.start + apiTool.limit)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {

        var texto = "";
        // Get 10 coins and symbols 
        api.data.forEach(element => {

            // console.log(element.name)

            texto = texto + `
      
            <div class="media">
                <img src="./src/assets/img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="68">
                <div class="media-body">
                <h5 class="mt-2">${element.name} - ${element.symbol}</h5>
                <p>First Historical Data: ${Date(element.first_historical_data)}</p>                        
                </div>
            </div>
            <hr>
    
            `;

            document.getElementById("coins").innerHTML = texto;
        });

    })
    .catch((error) => {
        console.error(error.message);
    });