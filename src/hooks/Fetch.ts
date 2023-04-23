
  export const Fetch = async ( url : string ) => {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || typeof data !== "object") {
      throw new Error("no es un JSON válido.");
    }

    return data;
  };
