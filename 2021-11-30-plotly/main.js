/**
Create a bar graph for the population of countries.
See https://plotly.com/javascript/bar-charts/ for an example.

You can use the data from restcountries.com, e.g.:
https://restcountries.com/v3.1/alpha?codes=de,fr,be
You can choose your own countries, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for codes. */


// fetch 
async function getPopulations() {
    let response = await fetch("https://restcountries.com/v3.1/alpha?codes=de,fr,be");
    let result = await response.json();

    // get the population for each country
    let belgiumsPopulation = result[0].population
    let francePopulation = result[1].population
    let germanyPopulation = result[2].population

    // create a graph
    let dataSet1 = {
        x: ["Germany", "France", "Belgium"],
        y: [germanyPopulation, francePopulation, belgiumsPopulation],
        type: 'bar'
    };

    Plotly.newPlot('myGraph', [dataSet1]);
    // student.sayHello();
}

getPopulations();

function getPopulationByLanguage() {
    let input = document.getElementById("lang");
    // get value from input
    let lang = input.value;
    // "https://restcountries.com/v3.1/lang/" + lang
    let url = "https://restcountries.com/v3.1/lang/" + lang;
    getPopulationsByLang(url);
}

async function getPopulationsByLang(url) {
    let response = await fetch(url);
    let result = await response.json();
    // fetch api using url
    // get json, result variable
    //[{common: {name: "Germany"}, population: 90}, {}, {}]
    let countryNames = [];
    let countryPopulations = [];
    for (let i = 0; i < result.length; i++) {
        //loop through result array
        // add result[i].common.name to countryNames 
        countryNames.push(result[i].name.common);
        countryPopulations.push(result[i].population)
    }

    // create data set
    // create a graph
    let dataSet1 = {
        x: countryNames,
        y: countryPopulations,
        type: 'bar'
    };

    Plotly.newPlot('myGraph2', [dataSet1]);
}

// async function getResults() {
//     let returnValue = await getPopulationsByLang();
// }

