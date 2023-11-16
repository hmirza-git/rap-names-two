alert("hi");

async function rapperAPI() {
  const res = await fetch(`https://rap-names-two.vercel.app/api/21savage`);
  const data = await res.json();
  console.log(data);
}

rapperAPI();

document.querySelector("h2").innerHTML = "hello";
