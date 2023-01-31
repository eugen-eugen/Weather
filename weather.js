function bestWeather() {
    bW = [];
    bW.push(temperatures[0])
    for (let i = 1; i < temperatures.length; i++) {
        const w = temperatures[i];
        if ( w.Temperature > bW[0].Temperature ){
            bW = [w];
        } else if (w.Temperature == bW[0].Temperature){
            bW.push(w)
        }
    }
    return bW;
}

function bestWeatherUnder (maxTemperature){
    bWU = [];
    bWU.push(temperatures[0])
    for (let i = 1; i < temperatures.length; i++) {
        const w = temperatures[i];
        if ( w.Temperature < maxTemperature && w.Temperature > bWU[0].Temperature ){
            bWU = [w];
        } else if (w.Temperature < maxTemperature && w.Temperature == bWU[0].Temperature)
        {
            bWU.push(w)
        }
    }
    return bWU;
}

function topWeathers (maxTemperature) {
    
    var topWeathers = [];
    w = bestWeather()

    topWeathers.push(...w)
    for (let i = 0; i < 9; i++) {
        w = bestWeatherUnder(w[0].Temperature)
        topWeathers.push(...w)
    }
    return topWeathers;
}
