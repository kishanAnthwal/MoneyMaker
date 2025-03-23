const API_KEY = "c3b13733-6f73-43c6-bb93-c2cf6c3ae2bd";

export const getMatches = async () => {
  const URL = `https://api.cricapi.com/v1/countries?apikey=${API_KEY}&offset=0`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (e) {
    console.error("Error fetching data:", e.message);
    return null;
  }
};
