const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
let prophets = [];

function createCard(prophetsList){
    prophetsList.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let prophetsBirthdate = document.createElement("p");
        let prophetsBirthplace = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        prophetsBirthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        prophetsBirthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);


        card.appendChild(h2);
        card.appendChild(prophetsBirthdate);
        card.appendChild(prophetsBirthplace);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);        
    });
}



fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    else {return response.json();
    }
  })
  .then(function (jsonObject) {
    prophets = jsonObject['prophets'];
    createCard(prophets);
  });