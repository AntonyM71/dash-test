import {GraphQLClient} from "graphql-request";
import {getAllPokemonQuery} from "./queries";
import {APIPokemon} from "./types";

const client = new GraphQLClient("https://graphql-pokemon2.vercel.app/");

export const allPokemon = async (): Promise<{pokemons: APIPokemon[]}> => {
  const response = await client.request(getAllPokemonQuery);
  console.log(response);
  return response.pokemons;
};
