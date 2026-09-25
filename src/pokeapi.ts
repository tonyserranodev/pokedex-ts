export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      const locations: ShallowLocations = await res.json();
      return locations;
    } catch (e) {
      throw new Error(`error fetching user: ${(e as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/${locationName}/`;
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      const location: Location = await res.json();
      return location;
    } catch (e) {
      throw new Error(`error fetching location: ${(e as Error).message}`);
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  location: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      version: {
        name: string;
        url: string;
      };
      max_chance: number;
      encounter_details: {
        min_level: number;
        max_level: number;
        condition_values: [];
        chance: number;
        method: {
          name: string;
          url: string;
        };
      }[];
    }[];
  }[];
};
