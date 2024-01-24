const rep1 = document.getElementById("rep1-1");
const rep2 = document.getElementById("rep2-3");
const rep3 = document.getElementById("rep3-2");
const rep4 = document.getElementById("rep4-1");
const rep5 = document.getElementById("rep5-3");
const rep6 = document.getElementById("rep6-2");
const rep7 = document.getElementById("rep7-1");
const rep8 = document.getElementById("rep8-3");
const rep9 = document.getElementById("rep9-2");
const rep10 = document.getElementById("rep10-1");

function calculerScore() {
	let score = 0;
	if (rep1.checked) {
		score = score + 1;
	}
	if (rep2.checked) {
		score = score + 1;
	}
	if (rep3.checked) {
		score = score + 1;
	}
	if (rep4.checked) {
		score = score + 1;
	}
	if (rep5.checked) {
		score = score + 1;
	}
    if (rep6.checked) {
		score = score + 1;
	}
    if (rep7.checked) {
		score = score + 1;
	}
    if (rep8.checked) {
		score = score + 1;
	}
    if (rep9.checked) {
		score = score + 1;
	}
    if (rep10.checked) {
		score = score + 1;
	}
	document.getElementById("scorenum").innerText = `${score}`;
}
