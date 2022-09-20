const api = `https://rickandmortyapi.com/api/character/`;
async function getData(id) {
  const apiURL = id ? `${api}${id}` : api;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (e) {
    alert("Fetch error", e);
  }
}
export default getData;
