
// src/helpers/get-gifs.js

export const getGifs = async (category) => {
  const apiKey = import.meta.env.VITE_API_GIPHY_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
}