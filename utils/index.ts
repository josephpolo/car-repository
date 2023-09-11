import { carProps } from "@/types";

export async function fetchCars() {

    const headers = {
        'X-RapidAPI-Key': 'e02d410cbdmshc8a0940725ffeb3p1ea101jsn81f045d70059',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
        headers: headers,

    });

    const result = await response.json();

    return result;
    
}

export const calculateCarRent = (city_mpg: number, year:number) => {
    const basePricePerDay = 50; // Base rental price per day
    const mileAgeFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    //calculate addtional rate base on mileage and age
    const mileageRate = city_mpg * mileAgeFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

   //calculate total rent per day
   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
   
   return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car:carProps, angle?:string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const {make, year, model } = car;

    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", make)
    url.searchParams.append("modelFamily", model.split(' ')[0])
    url.searchParams.append("zoomType", 'fullscreen')
    url.searchParams.append("modelYear", `${year}`)
    url.searchParams.append("angle", `${angle}`)
    
    return `${url}`;
}