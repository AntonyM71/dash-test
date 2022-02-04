import { gql } from "graphql-request";

export const getAllPokemonQuery = gql`{
  pokemons(first:151) {
      id
      name
      number
      image
      attacks {
          fast {
              name
              type
              damage
          }
          special {
              name
              type
              damage
          }
      }
  }
}`;
