let string = '';
var ans = document.getElementById("ans");
var previousdata = document.getElementById("previousdata");


document.querySelectorAll(".item").forEach(item => {
    item.addEventListener('click', DoCalculation)
});

function DoCalculation(e) {
    var value = e.target.innerHTML;
    switch (value) {
        case "C.E":
            string = '';
            ans.innerHTML = string;
            previousdata.innerHTML = string;
            break;

        case "=":
            try {
                ans_string = eval(string);
                previousdata.classList.add('fade-in');
                // ans.classList.add('fade-out');
                previousdata.innerHTML = string + "=";
                string = ans_string;
                ans.innerHTML = string;
            }
            catch {
                string = "Error"
                previousdata.innerHTML = string;
            }
            // previousdata.classList.remove('fade-in');
            break;

        case "%":
            string /= 100;
            string 
            // ans.innerHTML = string;
            break;

        case "Del":
            pstring = string.split("");
            pstring.pop();
            string = pstring.join("");
            ans.innerHTML = string;
            break;

        default:
            previousdata.classList.remove('fade-in');
            string += e.target.textContent;
            ans.innerHTML = string;
            break;

    }
}