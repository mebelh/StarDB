export default class SwapiService {
    _apiBase = "https://swapi.co/api";

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResourse(`/people/`);
        return res.results.map(this._transformPersonData);
    };

    getPerson = async id => {
        const person = await this.getResourse(`/people/${id}`);
        return this._transformPersonData(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanetData);
    };

    getPlanet = async id => {
        const planet = await this.getResourse(`/planets/${id}/`);
        return this._transformPlanetData(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResourse(`/starships`);
        return res.results.map(this._transformStarshipData);
    };

    getStarship = async id => {
        const starship = await this.getResourse(`/starship/${id}`);
        return this._transformStarshipData(starship);
    };

    _extractId = item => {
        const idRegExp = /\/[0-9]*\/$/gm;

        return item.url.match(idRegExp)[0].slice(1, -1);
    };

    _transformPlanetData = planet => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPer: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarshipData = starship => {
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
        };
    };

    _transformPersonData = person => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };
}
