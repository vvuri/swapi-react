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
  
      return result.results;
    }
  
    getPerson (id) {
      return this.getResource(`/people/${id}/`);
    }
  
  
    async getAllPlanets () {
      const result = await this.getResource(`/planets/`);
  
      return result.results;
    }
  
    getPlanet (id) {
      return this.getResource(`/planets/${id}/`);
    }
  
    async getAllStarships () {
      const result = await this.getResource(`/starships/`);
  
      return result.results;
    }
  
    getStarship (id) {
      return this.getResource(`/starship/${id}/`);
    }
  
  }