const API_URL = "https://rickandmortyapi.com/api/character?page=";

export function HttpHandler() {

    
  async function getCharacter(page) {
    const response = await fetch(`${API_URL}${page}`, {
      method: "GET",
    });
    return await response.json();
  }

  return {
    getCharacter,
  };
}
