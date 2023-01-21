// js code
const buttons = document.querySelectorAll("button");
    let string = "";
    
    Array.from(buttons).forEach(button => {
      button.addEventListener("click", e => {
        const text = e.target.innerHTML;
        if (text === "=") {
          string = eval(string);
        } else if (text === "(AC)") {
          string = "";
        } else {
          string += text;
        }
        document.querySelector("textarea").innerText = string;
      });
    })



