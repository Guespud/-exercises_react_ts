import { routesApi } from "../routes/routesApi";
import { Fetch } from "./Fetch";

export const useCharacters = () => {

  const getCharacters = () => {
    const data = Fetch(routesApi.charactersApiUrl);
  };

  return { getCharacters };
};
