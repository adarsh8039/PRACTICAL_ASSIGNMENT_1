const fetch = require('node-fetch');

async function fetchGooglePage() {
  const url = 'https://www.google.com';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

async function main() {
  const data = await fetchGooglePage();
  if (data) {
    console.log('Data fetched successfully:');
    console.log(data);
  } else {
    console.log('Data fetch failed.');
  }
}

main();
