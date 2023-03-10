function bestWeather() {
    bW = temperatures[0]
    for (let i = 1; i < temperatures.length; i++) {
        const w = temperatures[i];
        if ( w.Temperature > bW.Temperature ){
            bW = w;
        }
    }
    return bW;
}

function bestWeatherUnder (maxTemperature){
    bWU = temperatures[0]
    for (let i = 1; i < temperatures.length; i++) {
        const w = temperatures[i];
        if ( w.Temperature < maxTemperature && w.Temperature > bWU.Temperature ){
            bWU = w;
        }
    }
    return bWU;
}

function topWeathers (maxTemperature) {
    
    var topWeathers = [];
    w = bestWeather()

    topWeathers.push(w)
    for (let i = 0; i < 9; i++) {
        w = bestWeatherUnder(w.Temperature)
        topWeathers.push(w)
    }
    return topWeathers;
}
