const adviceNo = document.querySelector(".advice-no");
const adviceBody = document.querySelector(".advice");
const refetchBtn = document.querySelector(".refetch-btn");
const loading = document.querySelector(".loading");

async function fetchAdvice() {
    loading.style.display = "block";
    adviceBody.innerText = "";
    let res = await (await fetch("https://api.adviceslip.com/advice")).json();
    let advice = res.slip;
    loading.style.display = "none";
    adviceNo.innerText = `ADVICE #${advice.id}`;
    adviceBody.innerText = `“${advice.advice}”`;
}

refetchBtn.addEventListener("click", fetchAdvice);

fetchAdvice();
