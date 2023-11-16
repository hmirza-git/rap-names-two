alert("hi");
const inputEl = document.querySelector("input");
async function rapperAPI(input) {
  const res = await fetch(`https://rap-names-two.vercel.app/api/${input}`);
  const data = await res.json();
  console.log(data);
  document.querySelector("h2").innerHTML = data.realName;
}

document.querySelector("button").addEventListener("click", () => {
  rapperAPI(inputEl.value);
});
