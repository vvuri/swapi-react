

console.log('Start WS API');

const swapi = new SwapiService();

swapi.getPerson(3).then( p => {
  console.log(p.name);    
})
