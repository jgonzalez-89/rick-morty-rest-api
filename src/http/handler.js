const API_URL = "https://rickandmortyapi.com/api/character?page=";
const API_BLOG = process.env.BACKEND_URL;

export function HttpHandler() {

    
  async function getCharacter(page) {
    const response = await fetch(`${API_URL}${page}`, {
      method: "GET",
    });
    return await response.json();
  }

  async function getCharacterBlog() {
    const response = await fetch(`${API_BLOG}`, {
      method: "GET",
    })
    return await response.json();
  }

  async function postCharacter(payload) {
    const response = await fetch(API_BLOG, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: contentType,
    });
    return await response.json();
  }

  async function putCharacterById(id, payload) {
    const response = await fetch(`${API_BLOG}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: contentType,
    });
  }

  async function deleteCharacterById(id) {
    const response = await fetch(`${API_BLOG}/${id}`, {
      method: 'DELETE',
      headers: contentType,
    });

    return response.status === 200 ? true : false;
  }


  return {
    getCharacter,
    getCharacterBlog,
    postCharacter,
    putCharacterById,
    deleteCharacterById
  };
}
