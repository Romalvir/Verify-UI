//grab the inputs, use query selector all becasue its more than one
const codes = document.querySelectorAll(".code")

//we want to focus on the first one, take node index and use focus method
codes[0].focus()

//take codes and loop through

codes.forEach((code,idx) => {
	//add event listener
	code.addEventListener("keydown", (e) => {
		if (e.key >= 0 && e.key <= 9){
			//move to next one, use the node and index + 1 then useing the focus method again
			setTimeout(() => {codes[idx + 1].focus(),10})
			
		} else if (e.key === "Backspace") {
			setTimeout(() => {codes[idx - 1].focus(),10})
		}
	})
})