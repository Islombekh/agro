const cardsEl = document.querySelector(".cards");

const request = async (resource) => {
  console.log("loading...");
  const req = await fetch(resource, { mode: "no-cors" });
  const data = await req.json();
  console.log("Done!");
  return data;
};

const createCountries = (countries) => {
  cardsEl.innerHTML = "";
  countries.forEach((country) => {
    const commonName = country.nomi;
    const flag = country.rasmi;

    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
      <a href=""><img src="${flag}" alt="" />
      <div class="cards__item-inner">
        <h5 class="cards__title">${commonName}</h5>
      </div></a>`;

    cardsEl.appendChild(li);
  });
};

const querySting = window.location.search;
const urlParams = new URLSearchParams(querySting);
const country = urlParams.get("country");
const countryAPI = `https://patron.pythonanywhere.com/api/v1/?turi=&nomi=${country}`;

request(countryAPI)
  .then((data) => {
    createCountryInfo(data[0]);
  })
  .catch((err) => {
    // alert(err.message);
  });

const countryInfEl = document.querySelector(".about-info");

const createCountryInfo = (country) => {
  const { flags, name } = country;

  countryInfEl.innerHTML = `
    <div class="about__section">
      <div class="about__section-img">
        <img
          src=${flags.svg}
          alt=""
          class="section__imhg-content"
          width="280px"
          height="350px"
        />
      </div>
      <div class="about__section-content">
        <h4 class="about__section-title">${name.common}</h4>
        <p class="about__section-desc about__section-descrip">
          ${name.common}
        </p>
      </div>
    </div>
    <div class="about__content">
      <p class="about__section-desc">
        ${name.common}
      </p>
    </div>
  `;
};

const API = "https://patron.pythonanywhere.com/api/v1/";

request(API)
  .then((data) => {
    createCountries(data);
  })
  .catch((err) => {
    // alert(err.message);
  });

const searchForEl = document.querySelector(".search");

searchForEl.search.addEventListener("input", () => {
  const searchValue = searchForEl.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
    let filterAPI;

    if (li.textContent == "Barchasi") {
      filterAPI = "https://patron.pythonanywhere.com/api/v1/";
    } else {
      filterAPI = `https://patron.pythonanywhere.com/api/v1/?turi=${li.textContent}&nomi=`;
    }

    request(filterAPI)
      .then((data) => {
        createCountries(data);
      })
      .catch((err) => {
        // alert(err.message);
      });
  });
});
