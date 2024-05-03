const container = document.querySelector('container');
const search = document.querySelector('search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = '443e7665424ae9de294b50c3a4a86fb1';
    const city = document.querySelector('.search-box input').value;

    if(city === '')
       return; 
    
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response => Response.json()).then(json => {
        if(json.cod === '404'){
            container.computedStyleMap.height = '400px';
            weatherBox.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
        }
       })
})