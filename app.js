// Créer une variable
// var, let, const
// un préféré ?
// >> var : le mal aimé, le vieux, l'ancien
// let ou const
// un préféré
// let ++++
// const - (import de fichiers)
// Team const <= moi
// => pour éviter les réaffectations
// => en Java : final

// let

let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

// const

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
// citiesId = []; // réaffectation interdite
console.log(citiesId);
citiesId.push("tokyo"); // modification est permise
console.log(citiesId);

// Création d'objet

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    // return {city: city, temperature: temperature};
    return {
        city,
        temperature
    };
}

const weather = getWeather("paris");
console.log(weather); // { city: 'PARIS', temperature: 20 }

// Affectation destructurée

let {
    city,
    temperature
} = weather;
// let {city: city2, temperature: temperature2} = weather;
// console.log(city2);

console.log(city);
console.log(temperature);

// Rest operator

const [parisId, nycId, ...othersCitiesId] = citiesId;


console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Classe 
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    // Pas comme en Java
    // getPrice() {
    //     return this._price;
    // }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]";
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Paris", "img / paris.jpg");
    }
}

const parisIdObject = new Trip("paris", "Paris", "img / paris.jpg");
console.log(parisIdObject);
console.log(parisIdObject.name);

parisIdObject.price = 100; // set

console.log(parisIdObject.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

// Héritage

class FreeTrip extends Trip {
    price = 0;

    toString() {
        return "Free" + super.toString()
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

console.log(freeTrip.toString());

// Promise, Set, Map, Arrow Function

class TripService {


    constructor() {
        // TODO Set of 3 trips
        const paris = new Trip('paris', 'Paris', 'img/paris.jpg');
        const nantes = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
        const rio = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
        this.tripServiceSet = new Set([paris, nantes, rio]);
        // this.tripServiceSet.add(paris);
        // this.tripServiceSet.add(nantes);
        // this.tripServiceSet.add(rio);
    }

    // name -> trip
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                for (const trip of this.tripServiceSet) {
                    if (trip.name === tripName) {
                        resolve(trip)
                    }
                }
                // this.tripServiceSet.forEach(element => {
                //     if (element.name === tripName) {
                //         resolve(element.id)
                //     }
                // });

                reject("No trip with name " + tripName)
            }, 2000);
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.tripServiceMap = new Map();
        this.tripServiceMap.set("paris", 100)
        this.tripServiceMap.set("rio-de-janeiro", 800)
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de
                //la recherche
                if (this.tripServiceMap.has(tripId)) {
                    resolve(this.tripServiceMap.get(tripId))
                } else {
                    reject("No price for trip id " + tripId)
                }
            }, 2000)
        });
    }
}

const tripservice = new TripService();
const priceservice = new PriceService();

tripservice.findByName("Paris")
    .then(tripTrouve => console.log('Trip found ', tripTrouve))
    .catch((err) => console.log(err))

tripservice.findByName("Toulouse")
    .then(tripTrouve => console.log('Trip found: ', tripTrouve))
    .catch((err) => console.log(err))

tripservice.findByName("Rio de Janeiro")
    .then(tripTrouve => priceservice.findPriceByTripId(tripTrouve.id))
    .then(price => console.log('Price found:', price))
    .catch(error => console.log(error));

tripservice.findByName("Nantes")
    .then(tripTrouve => priceservice.findPriceByTripId(tripTrouve.id))
    .then(price => console.log('Price found:', price))
    .catch(error => console.log(error));

// let promise1 = tripservice.findByName("Nantes");
// console.log(promise1);
// promise1
//     .then(trip => {
//     // ok
// }).catch(error => {
//    // ko
// });

tripservice.findByName("Nantes")
    .then(function (tripTrouve) {
        return priceservice.findPriceByTripId(tripTrouve.id);
    })
    .then(price => console.log('Price found:', price))
    .catch(error => console.log(error));
//
// const resultat = fetch();
//
// // callback hell
// fetch(resultat => {
//     fetch(resultat => {
//         fetch(resultat => {
//             fetch(resultat => {
//                 fetch(resultat => {
//
//                 });
//             });
//         });
//     });
// });
