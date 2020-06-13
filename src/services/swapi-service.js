export default class SwapiService {
  
    _apiBase = 'https://swapi.dev/api';
  
    async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
      
      console.log(`fetch: ${this._apiBase}${url}, ${res.status}`);
      if (!res.ok) 
        throw new Error(`Incorrect request ${url}, received ${res.status}`);
    
      return await res.json();
    }
  
    async getAllPeople () {
      const result = await this.getResource(`/people/`);
  
      return result.results.map(this._tranformPerson);
    }
  
    async getPerson (id) {
      const person = await this.getResource(`/people/${id}/`);

      return this._tranformPerson(person);
    }
    
    async getAllPlanets () {
      const result = await this.getResource(`/planets/`);
  
      return result.results.map(this._transformPlanet);
    }
  
    async getPlanet (id) {
      const planet = await this.getResource(`/planets/${id}/`);

      return this._transformPlanet(planet);
    }
  
    async getAllStarships () {
      const result = await this.getResource(`/starships/`);
  
      return result.results.map(this._tranformStarship);
    }
  
    async getStarship (id) {
      const starship = await this.getResource(`/starship/${id}/`);

      return this._tranformStarship(starship);
    }

    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformPlanet = planet => {
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: NavigationPreloadManager.rotationPeriod,
        diameter: planet.diameter
      }
    }

    _tranformStarship = starship => {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity
      }
    }

    _tranformPerson = person => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      }
    }
  }