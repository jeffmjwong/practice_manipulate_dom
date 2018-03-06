const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

button.addEventListener('click', () => {
  const inputValue = input.value;
  p.innerHTML = `${inputValue}:`;
  p.title = "List description"
});
