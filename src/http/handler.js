export function HttpHandler() {
  const API_URL = 'https://rickandmortyapi.com/api/character?page=';
  const API_BLOG = import.meta.env.VITE_BACKEND_URL;
  // const API_BLOG = 'https://3001-jgonzalez89-rickmortyre-yblg1dyfqlv.ws-eu90.gitpod.io';

  async function getCharacter(page) {
    const response = await fetch(`${API_URL}${page}`, {
      method: 'GET',
    });
    return await response.json();
  }

  async function getCharacterBlog() {
    const response = await fetch(`${API_BLOG}/characters`, {
      method: 'GET',
    });
    return await response.json();
  }

  async function postCharacter(payload) {
    const response = await fetch(`${API_BLOG}/characters`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await response.json();
  }

  async function putCharacterById(id, payload) {
    const response = await fetch(`${API_BLOG}/characters/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: contentType,
    });
  }

  async function deleteCharacterById(id) {
    const response = await fetch(`${API_BLOG}/characters/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    return response.status === 200 ? true : false;
  }

  return {
    getCharacter,
    getCharacterBlog,
    postCharacter,
    putCharacterById,
    deleteCharacterById,
  };
}
