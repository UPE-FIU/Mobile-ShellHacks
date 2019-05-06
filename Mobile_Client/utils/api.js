async function fetchDummyText() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  return data;
  // .then(response => response.json())
  // .then(json => console.log(json));
}

module.exports.fetchDummyText = fetchDummyText;
