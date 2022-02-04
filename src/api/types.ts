export type APIPokemonEvolutionRequirement = {
  amount: number
  name: string
}

export type APIAttack = {
  name: string
  type: string
  damage: number
}

export type APIPokemonAttack = {
  fast: [APIAttack]
  special: [APIAttack]
}

export type APIPokemonDimension = {
  minimum: string
  maximum: string
}

export type APIPokemon = {
  id: string;
  number: string;
  name: string;
  weight: APIPokemonDimension,
  height: APIPokemonDimension,
  classification: string;
  types: [string];
  resistant: [string];
  attacks: APIPokemonAttack;
  weaknesses: [string];
  fleeRate: number;
  maxCP: number;
  evolutions: [APIPokemon];
  evolutionRequirements: APIPokemonEvolutionRequirement
  maxHP: number;
  image: string;
}

export type APIResult = { pokemons: [APIPokemon]; }
