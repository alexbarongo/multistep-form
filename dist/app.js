const toggleSwitch = document.querySelector(".round");
const promoInfo = document.querySelector(".promo")
const monthly = document.querySelector(".month");
const yearly = document.querySelector(".year");
const arcade = document.querySelector(".arcade");
const advanced = document.querySelector(".advanced");
const pro = document.querySelector(".pro");
const placeToChoose = document.querySelector(".plan-to-choose")


toggleSwitch.addEventListener("click", switchToggleMonth);

function switchToggleMonth(){
	if(toggleSwitch.classList.contains("round-clicked")){
		toggleSwitch.classList.remove("round-clicked")
		toggleSwitch.classList.add("round")
		monthly.style.color = "hsl(213, 96%, 18%)"
		yearly.style.color = "hsl(231, 11%, 63%)"
		promoInfo.style.display = "none"
		arcade.textContent = "$9/mo"
		advanced.textContent = "$12/mo"
		pro.textContent = "$15/mo"
	} else {
		monthly.style.color = "hsl(231, 11%, 63%)"
		yearly.style.color = "hsl(213, 96%, 18%)"
		toggleSwitch.classList.remove("round")
		toggleSwitch.classList.add("round-clicked")
		promoInfo.style.display = "block"
		toggleSwitch.style.transition = "0.2s ease"
		arcade.textContent = "$90/mo"
		advanced.textContent = "$120/mo"
		pro.textContent = "$150/mo"
	}
}

function selection(){
	for (let i = 0; i < placeToChoose.length; i++) {
		placeToChoose[i].addEventListener('click',function(){
			placeToChoose[i].style.border = "1px solid hsl(243, 100%, 62%)v"
		})
	}
}

selection()