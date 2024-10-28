import dotenv from 'dotenv';
import { SchemaType } from 'mongoose';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinate {
    latitude: number;
    longitude: number;
    cityName: string
    country: string;
    state: string;
}

// TODO: Define a class for the Weather object
class Weather {
  cityName: string;
  date:string;
  humidity: number;
  wind: number;
  temp: number;
  icon:string;

constructor (cityName:string,date:string, humidity:number, wind:number, temp:number,icon:string){
this.cityName = cityName
this.date = date;
this.humidity = humidity;
this.wind = wind;
this.temp = temp;
this.icon = icon;
}

}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string;

  private apiKey?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';

    this.apiKey = process.env.API_KEY || '';
  }
  
   

  // TODO: Create fetchLocationData method
  async fetchLocationData(city: string) {
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    try {
      const response = await fetch(
        `${this.baseURL}/data/2.5/weather?q=${city}&appid=${this.apiKey}`
      );

      const forecast = await response.json();
    }
      catch(error) {

      }
      
 

   
//copy 52 to 64
// url - change weather to forecast
const baseURL: string = "https://api.example.com";


    }
    private destructureLocationData(location: Coordinate): Coordinate {
      const { cityName, latitude, longitude,country, state } = location;
      const coordinates:Coordinate = {
       cityName: cityName,
       longitude: longitude,
       latitude: latitude,
       country: country,
       state: state

      }
      return coordinates;
    }




///try {}
 // const response = await fetch(
   // `${this.baseURL}/data/2.5/forecast?q=${city}&appid=${this.apiKey}`
    
  //);

  //const forecast = await response.json();

  
  
  
    

     
    
  




    
    
        
      
    
    
      
    
    
    
  


  

  
  
  

  




  // TODO: Create destructureLocationData method

  const locationData = {
 



  //unction exampleFunction(): void {
    //console.log("This will run");

    //return; // After this point, no code will be executed in this function.

    //console.log("This will never run"); // Unreachable code
//}
  
//function checkValue(value: number): void {
  //if (value > 10) {
      //console.log("Value is greater than 10");
      //return; // This exit point is valid
}

  //console.log("Value is 10 or less");
  // No unreachable code here now
//}

 


  
  
  

    
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method

  const buildGeocodeQuery = ({
    address: '1250 Left St. drive',
    city: 'Austin',
    state: 'Texas',
    country: 'US',
    apikey: 'YOUR_API_KEY_HERE'
  });

  

  

  
  
    
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  const buildWeatherQuery = ({
    temp: '60 degrees',
    state: 'Texas',
    country: 'US',
  });

  

  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  const fetchAndDestructureLocationData = ({
    miles: '30 miles',
    time: '5 hours',
    




  });

 
  
 
  
        
  
  


  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method


  


  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
  



  
      

      
    
  
  
    

    
    

      
    
  
  //try {
    // Some code that might throw an error
    console.log("Trying something risky...");
    throw new Error("Oops!");
} catch (error) {
    // Handle the error
    console.error("Caught an error:", error);
}
