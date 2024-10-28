


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

  // Write the JSON data to the file

  

   const write(cities: string[]): void {

    // Write the JSON data to the file
    
    const data: string = JSON.stringify(cities, null, 2);
            
    
        




  
 



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
  const query= ({
    address: '1600 Amphitheatre Parkway, Mountain View, CA',
    key: 'YOUR_API_KEY',
    components: 'country:US',
    region: 'us',
});






