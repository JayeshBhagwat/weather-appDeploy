console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageIcon = document.querySelector('#message-icon')
const weatherDescription = document.querySelector('#weather-desc')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    // messageOne.textContent = 'Loading...'
    search.value = '';
    // messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                // messageOne.textContent = data.location
                messageOne.textContent = data.forecast.location.name +'- '+data.forecast.current.temperature +'℃';
                const path = data.forecast.current.weather_icons[0]
                messageIcon.setAttribute('src',path);
                weatherDescription.textContent = 'It\'s '+ data.forecast.current.weather_descriptions[0]+ ' Today..';
                messageTwo.textContent ='Lattitude- '+ data.forecast.location.lat +', Longitude- '+ data.forecast.location.lon;
                // console.log(data.location)

                console.log(data)
            }
        })
    })
})