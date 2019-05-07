import { EXPRESS_ENDPOINTS } from "../constants";

const { getPokemon } = EXPRESS_ENDPOINTS;

export const getPokemonByName = async name => {
  const lowerCaseName = name.toLowerCase();

  const response = await fetch(`${getPokemon}/${lowerCaseName}`);

  const body = response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
};
