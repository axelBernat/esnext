let favoriteCityId = "Rome";
console.log(favoriteCityId);
favoriteCityId = "Paris";
console.log(favoriteCityId);

let citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// impossible constante variable
//citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId) {
    
    let city = cityId;
    let temperature = 20;
    let obj = {
        city:city,
        temperature:temperature
    };
    return obj;
    
}
console.log(getWeather("PARIS"));

const weather = {city:"PARIS",temperature:20};
const {city,temperature} = weather;
console.log(city);
console.log(temperature);
const [parisId, nycId, othersCitiesId] = [citiesId[0], citiesId[1],"3"];
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId);

class Trip {
    constructor(id, name, imageUrl,price){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        let _price;
        
    }
    
    toString(){
        console.log(`Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`);
    }

    set price(price){
        this._price = price;
    }

    get price() {
        this._price = this.price;
    }

    static getDefaultTrip() {
        let defaultInstance = {
            id: "rio-de-janeiro",
            name: "Rio de Janeiro",
            imageUrl: "img/rio-de-janeiro.jpg"
        }
        return defaultInstance
    }
}

const parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
parisTrip.toString();

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip);

class FreeTrip extends Trip{
    constructor(id, name, imageUrl,price) {
        super(id,name,imageUrl,price = 0);
        
    }

    toString() {
        
        console.log(`FreeTrip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`);
    
    }
}
const freeTrip = new FreeTrip("nantes","Nantes","img/nantes.jpg");
freeTrip.toString();

 class TripService {
     constructor() {
         // TODO Set of 3 trips
        
         this.obj1 = new Trip('paris', 'Paris', 'img/paris.jpg');
         this.obj2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
         this.obj3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
     }
     
     findByName(tripName) {
         return new Promise((resolve, reject) => {
             setTimeout(() => {
                 // ici l'exécution du code est asynchrone
                 // TODO utiliser resolve et reject en fonction du résultat de la
                 
                 switch (tripName) {
                     case this.obj1.name:
                         resolve(this.obj1)
                         break;
                     case this.obj2.name:
                         resolve(this.obj2)
                     break;
                 
                     case this.obj3.name:
                         resolve(this.obj3)
                     break;
                     default:
                         
                         reject(new Error("No trip with name " + tripName))
                         break;
                 }
             }, 2000)
         });
     }
 }
 class PriceService {
     constructor(id_voyage,prix) {
         
         // créer
         let price = new Map();
         // alimenter
         price.set(1, {cle: this.id_voyage = id_voyage});
         price.set(2, {valeur:this.prix = prix});
         
         
     }
     findPriceByTripId(tripId) {
         
         
    }
}
     
    
    let testTripService = new TripService(parisTrip, defaultTrip, freeTrip);
    console.log(testTripService);

    testTripService.findByName("paris")

    let paris = new PriceService("PARIS",40);
    console.log(paris);

    let rio = new PriceService("RIO", 140);
    console.log(rio);
