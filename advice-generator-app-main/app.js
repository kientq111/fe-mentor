const btn = document.getElementById("btn");
const title = document.getElementById("id");
const content = document.getElementById("content");

const onClickHandle = () => {
  fetchQuoteData();
};

btn.addEventListener("click", () => onClickHandle());

const fetchQuoteData = async () => {
  title.innerHTML = `Loading...`;
  content.innerHTML = `Loading...`;
  const res = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    cache: "no-cache",
  });
  const {
    slip: { advice, id },
  } = await res.json();
  title.innerHTML = `advice #${id}`;
  content.innerHTML = `"${advice}"`;
};

fetchQuoteData();
