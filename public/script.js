/*/function getWeather(cityName){
//API 0b6980877d7eea668358aa9e899fbbbe

    const url= `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0b6980877d7eea668358aa9e899fbbbe&units=metric`

    const messageElement = document.getElementById('message');
    document.getElementById('message').innerText = `Loading...`
    messageElement.style.color='grey';
    axios.get(url)
    .then(function (response) {
        // handle success
        
        document.getElementById('message').innerText = `It is now ${response.data.main.temp}°C`
        messageElement.style.color='black';
    })

    .catch(function (error) {
        // handle error
        
        messageElement.innerText = error;
        messageElement.style.color='red';
    })

    .finally(function () {
        // always executed
        console.log("All Good")
    });
}

window.onload = function() {
    document.getElementById("sendButton").onclick = function() {
        // Get the city name from the text field
        const cityName = document.getElementById("cityTextInput").value;

        // call getWeather function

        getWeather(cityName);
    }
}
*/