
export async function fetchCars() {

    const headers = {
        'X-RapidAPI-Key': 'e02d410cbdmshc8a0940725ffeb3p1ea101jsn81f045d70059',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,

    });

    const result = await response.json();

    return result;
    
}