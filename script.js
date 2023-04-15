function findPWithMaxText(paragraphs) {
  let maxText = "";
  let maxParagraph = paragraphs[0];

  for(let i = 0; i < paragraphs.length; i++) {
    if(paragraphs[i].textContent.length > maxText.length) {
      maxText = paragraphs[i].textContent;
      maxParagraph = paragraphs[i];
    }
  }

  return maxParagraph;
}

const pList = document.querySelectorAll('.text');
const pWithMaxText = findPWithMaxText(pList);

pWithMaxText.classList.add('red');
pWithMaxText.addEventListener('click', function(event) {
  const x = event.clientX;
  const y = event.clientY;

  const div = document.createElement('div');
  div.textContent = `(${x};${y})`;

  const h1 = document.querySelector('h1');
  document.body.insertBefore(div, h1.nextSibling);
});
