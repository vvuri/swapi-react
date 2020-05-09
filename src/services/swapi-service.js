export default class SwapiService {
  
    _apiBase = 'https://swapi.dev/api';
  
    async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) 
        throw new Error(`Incorrect request ${url}, received ${res.status}`);
    
      const body = await res.json();
    
      return body;
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
      return this.getResource(`/planet/${id}/`);
    }
  
    async getAllStarships () {
      const result = await this.getResource(`/starships/`);
  
      return result.results;
    }
  
    getStarship (id) {
      return this.getResource(`/starship/${id}/`);
    }
  
  }