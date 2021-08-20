RedSlider = document.getElementById("R");
GreenSlider = document.getElementById("G");
BlueSlider = document.getElementById("B");

RedSlider_number = document.getElementById("R-number");
GreenSlider_number = document.getElementById("G-number");
BlueSlider_number = document.getElementById("B-number");

let Sliders_number = [RedSlider_number, GreenSlider_number, BlueSlider_number];
let Sliders = [RedSlider, GreenSlider, BlueSlider];
let Value = [53, 163, 60];
let RGB_value = [53, 163, 60];
let RGB_value_hex = [];
let BackgroundColor;
let BackgroundColor_hex;
doAction();

for (let i = 0; i < Sliders.length; i++) {
	Sliders_number[i].addEventListener("change", changeValue_number);
	Sliders[i].addEventListener("input", changeValue_slider);
	Sliders_number[i].value = Value[i];
	Sliders[i].value = Value[i];
}

function changeValue_slider() {
	for (let i = 0; i < Sliders.length; i++) {
		if (Value[i] != Sliders[i].value) Value[i] = Sliders[i].value;
		Sliders_number[i].value = Value[i];
		RGB_value[i] = Value[i];
	}
	doAction();
}

function changeValue_number() {
	for (let i = 0; i < Sliders.length; i++) {
		if (Sliders_number[i].value > 255) Sliders_number[i].value = 255;
		if (Value[i] != Sliders_number[i].value) Value[i] = Sliders_number[i].value;
		Sliders[i].value = Value[i];
		RGB_value[i] = Value[i];
	}
	doAction();
}

function doAction() {
	BackgroundColor =
		"rgb( " + RGB_value[0] + " , " + RGB_value[1] + " , " + RGB_value[2] + ")";
	document.documentElement.style.setProperty("--background", BackgroundColor);
	for (let i = 0; i < Sliders.length; i++) {
		RGB_value_hex[i] = Number(RGB_value[i]).toString(16);
		if (RGB_value_hex[i] < 10) RGB_value_hex[i] = "0" + RGB_value_hex[i];
	}
	BackgroundColor_hex =
		"#" + RGB_value_hex[0] + RGB_value_hex[1] + RGB_value_hex[2];
	document.getElementById("Hex_value").value = BackgroundColor_hex;
	document.getElementById("RGB_value").innerHTML = BackgroundColor;
}

function copy(i) {
	if (i === 0) {
		const body = document.querySelector("body");
		const paragraph = document.querySelector("#RGB_value");
		const area = document.createElement("textarea");
		body.appendChild(area);
		area.value = paragraph.innerText;
		area.select();
		document.execCommand("copy");
		alert("Copied the text: " + area.value);
		body.removeChild(area);
	} else if (i === 1) {
		let copyText = document.getElementById("Hex_value");
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand("copy");
		alert("Copied the text: " + copyText.value);
	}
}
