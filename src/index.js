import { error } from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/BrightTheme.css";

let data;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((da) => {
    data = da;
  });

document.querySelector("input").addEventListener("input", (e) => {
  let text = [];
  data
    .map((country) => country.name.common)
    .forEach((name) => {
      if (name.toLowerCase().includes(e.target.value.toLowerCase())) {
        text.push(name);
      }
    });

  if (text.length <= 10 && text.length > 1) {
    const array = [];
    text.forEach((element) => {
      array.push(`<li>${element}</li>`);
    });
    document.querySelector("ul").innerHTML = array.join("");
    document.querySelector(".x").innerHTML = "";
  } else if (text.length === 1) {
   const element = data.find((x) => x.name.common === text[0]);
      if (element.name.common == text[0]) {
        const layaut = `<h1>${element.name.common}</h1>
      <p>Capital:<span>${element.capital}</span></p>
      <p>Population:<span>${element.population}</span></p>
      <p>Languages:</p>
      <ul class="y"></ul>
      <img src="${element.flags.png}" alt="">`;
      document.querySelector("ul").innerHTML = "";
      document.querySelector(".x").innerHTML = layaut;
       const array = [];
      for (const key in element.languages) {
            const ele = element.languages[key];
            array.push(`<li>${ele}</li>`);
      }
      document.querySelector(".y").innerHTML = array.join("");
      }
  } else if (text.length > 10) {
    error({
      title: "О ні!",
      text: "Дуже багато співпадінь",
    });
    document.querySelector("ul").innerHTML = "";
    document.querySelector(".x").innerHTML = "";
  }else{
    error({
      title: "О ні!",
      text: "Такої країни немає",
    });
    document.querySelector("ul").innerHTML = "";
    document.querySelector(".x").innerHTML = "";
  }
});
