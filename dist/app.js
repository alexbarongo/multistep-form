const toggleSwitch = document.querySelector(".round")
const promoArcade = document.querySelector(".plan-to-choose .promo-arcade")
const promoAdvanced = document.querySelector(".plan-to-choose .promo-advanced")
const promoPro = document.querySelector(".plan-to-choose .promo-pro")
const monthly = document.querySelector(".month")
const yearly = document.querySelector(".year")
const plans = document.querySelectorAll(".plan-to-choose")
const arcade = document.querySelector(".arcade")
const advanced = document.querySelector(".advanced")
const pro = document.querySelector(".pro") 
const selections = document.querySelector(".selections")
const serviceAddOns = document.querySelector(".service")
const storageAddOns = document.querySelector(".storage")
const profileAddOns = document.querySelector(".profile")


toggleSwitch.addEventListener("click", switchToggle)

function switchToggle(){
	if(toggleSwitch.classList.contains("round-clicked")){
		toggleSwitch.classList.remove("round-clicked")
		toggleSwitch.classList.add("round")
		monthly.style.color = "hsl(213, 96%, 18%)"
		yearly.style.color = "hsl(231, 11%, 63%)"
		promoArcade.style.display = "none"
		promoAdvanced.style.display = "none"
		promoPro.style.display = "none"
		arcade.textContent = "$9/mo"
		advanced.textContent = "$12/mo"
		pro.textContent = "$15/mo"
		serviceAddOns.textContent = "$1/mo"
		storageAddOns.textContent = "$2/mo"
		profileAddOns.textContent = "$2/mo"
	} else {
		monthly.style.color = "hsl(231, 11%, 63%)"
		yearly.style.color = "hsl(213, 96%, 18%)"
		toggleSwitch.classList.remove("round")
		toggleSwitch.classList.add("round-clicked")
		promoArcade.style.display = "block"
		promoAdvanced.style.display = "block"
		promoPro.style.display = "block"
		toggleSwitch.style.transition = "0.2s ease"
		arcade.textContent = "$90/yr"
		advanced.textContent = "$120/yr"
		pro.textContent = "$150/yr"
		serviceAddOns.textContent = "$10/yr"
		storageAddOns.textContent = "$20/yr"
		profileAddOns.textContent = "$20/yr"
	}
}

function planChoises(){
	for (let i = 0; i < plans.length; i++) {
		plans[i].addEventListener("click", function(){
			if(i === 0 || i === 1 || i === 2){
				plans[i].style.border = "1px solid hsl(243, 100%, 62%)"
			}
		})
	}
}

planChoises()




