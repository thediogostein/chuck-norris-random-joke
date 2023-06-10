function addToDOM(joke) {
  const outputEl = document.getElementById('output');
  outputEl.textContent = '';
  const p = document.createElement('p');
  const pText = document.createTextNode(joke.value);
  p.append(pText);

  outputEl.append(p);
}

async function getJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    addToDOM(data);
  } catch (error) {}
}

const button = document.querySelector('button');

button.addEventListener('click', getJoke);

getJoke();
