### Previsão do tempo

O código HTML define a estrutura da página.
No <head> estão as informações meta e links para folhas de estilo e fontes.
O <body> contém a estrutura da aplicação.
Há uma div com a classe .container que envolve todo o conteúdo. Dentro dela, temos:
Uma div com a classe .search-box que contém um campo de entrada para o usuário inserir sua localização e um botão de busca.
Uma div com a classe .not-found, que é exibida quando a localização inserida é inválida.
Uma div com a classe .weather-box que mostra informações sobre o clima, como temperatura e descrição.
Uma div com a classe .weather-details que exibe detalhes adicionais sobre o clima, como umidade e velocidade do vento.

===============================================================================================================================================

O código CSS estiliza a aparência da aplicação.
Define o estilo para diferentes elementos HTML, como fontes, cores, tamanhos e posicionamentos.
Também inclui algumas animações para transições suaves.

===============================================================================================================================================

O código JavaScript é responsável por fazer solicitações à API do OpenWeatherMap para obter dados de previsão do tempo com base na localização inserida pelo usuário.
Quando o usuário clica no botão de busca, o evento de clique é acionado.
A função associada a esse evento faz uma solicitação fetch para a API do OpenWeatherMap usando a localização inserida pelo usuário.
Os dados retornados pela API são processados e as informações relevantes são exibidas na página, como imagem do clima, temperatura, descrição, umidade e velocidade do vento.
Se a localização inserida for inválida (erro 404), uma mensagem de erro é exibida.

=================================================================================================================================================

Sobre a lógica do js:

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

Aqui, selecionei elementos HTML usando os seletores de classe para interagir com eles posteriormente.

--------------------------------------------------------------------------------------------------------------------------------------------------

search.addEventListener('click', () => {
    Código a ser executado quando o botão de busca é clicado
});

Este trecho de código adiciona um ouvinte de evento ao botão de busca. Quando o botão é clicado, a função associada será executada.

--------------------------------------------------------------------------------------------------------------------------------------------------

const APIKey = '443e7665424ae9de294b50c3a4a86fb1';
const city = document.querySelector('.search-box input').value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        Código para lidar com os dados retornados pela API
    });

Aqui, fiz uma solicitação fetch à API do OpenWeatherMap para obter os dados do clima com base na localização inserida pelo usuário.
A URL da API inclui a cidade inserida pelo usuário, a unidade de medida (units=metric para Celsius) e a chave de API.
Depois de obter a resposta, transformei os dados em JSON e, em seguida, lida com esses dados na próxima etapa.

--------------------------------------------------------------------------------------------------------------------------------------------------

if (json.cod === '404') {
     Código para lidar com localização inválida
} else {
     Código para exibir as informações do clima na página
}

Verifica se o código de status retornado pela API é 404, o que indica uma localização inválida. Nesse caso, exiba a mensagem de erro.
Caso contrário, processa os dados recebidos e exiba na página, incluindo a imagem do clima, temperatura, descrição, umidade e velocidade do vento.

---------------------------------------------------------------------------------------------------------------------------------------------------

error404.style.display = 'block';
error404.classList.add('fadeIn');

Se a localização for inválida, exiba a mensagem de erro e aplica uma animação de fadeIn.
Se os dados do clima forem obtidos com sucesso, exiba as informações na página com uma animação de fadeIn.

---------------------------------------------------------------------------------------------------------------------------------------------------

const image = document.querySelector('.weather-box img');
const temperature = document.querySelector('.weather-box .temperature');
const description = document.querySelector('.weather-box .description');
const humidity = document.querySelector('.weather-details .humidity span');
const wind = document.querySelector('.weather-details .wind span');

switch (json.weather[0].main) {
    case 'Clear':
        image.src = 'assets/clear.png';
        break;
    case 'Rain':
        image.src = 'assets/rain.png';
        break;
    case 'Snow':
        image.src = 'assets/snow.png';
        break;
    case 'Clouds':
        image.src = 'assets/cloud.png';
        break;
    case 'Haze':
        image.src = 'assets/mist.png';
        break;
    default:
        image.src = '';
}  

Aqui, selecionei elementos HTML onde queremos exibir as informações do clima.
Dependendo do tipo de clima retornado pelos dados da API, alterei a imagem exibida na página. Por exemplo, se o clima for 'Clear', exiba uma imagem de céu limpo; se for 'Rain', exiba uma imagem de chuva, e assim por diante.
atualizei a temperatura, a descrição, a umidade e a velocidade do vento com os dados obtidos da API.

---------------------------------------------------------------------------------------------------------------------------------------------------

weatherBox.style.display = '';
weatherDetails.style.display = '';
weatherBox.classList.add('fadeIn');
weatherDetails.classList.add('fadeIn');
container.style.height = '590px';

Após processar os dados do clima e exibi-los na página, tornei visíveis as áreas de exibição do clima e detalhes do clima.
Adicionei uma classe de animação para dar um efeito de fade-in a esses elementos.
Ajustei a altura do contêiner para acomodar as informações exibidas.

---------------------------------------------------------------------------------------------------------------------------------------------------

