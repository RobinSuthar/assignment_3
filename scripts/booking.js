/********* create variables *********/
/* jshint esversion: 6 */
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/*Created two variables with with dialy price*/
let dailyRate= 35; 
let dayCounter = 0;
let Button1 = document.getElementById("full");
let Button2 = document.getElementById("half");
let Clearbutton = document.getElementById("clear-button");
let FinalCost = document.getElementById("calculated-cost");
let Weeks = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let Elements = Weeks.map((day) => document.getElementById(day));

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

    Elements.forEach((dayElement) => {
        dayElement.addEventListener("click", () => {
            if  (!dayElement.classList.contains("clicked")) {
                dayElement.classList.add("clicked");
                dayCounter++;
                calculateCost();
            }
        });
    });

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0. 
    Clearbutton.addEventListener("click", () => {
        Elements.forEach((dayElement) => {
            dayElement.classList.remove("clicked");
        });
        dayCounter = 0;
        FinalCost.textContent = "0";
    });

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



/*Button1 is the full button*/
    Button2.addEventListener("click", () => {
        Button2.classList.add("clicked");
        Button1.classList.remove("clicked");
        dailyRate = 20;
        calculateCost();
    });

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


/*Button1 is the full button*/
    Button1.addEventListener("click", () => {
        Button1.classList.add("clicked");
        Button2.classList.remove("clicked");
        dailyRate = 35;
        calculateCost();
    });

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
    function calculateCost() {
        const totalCost = dayCounter * dailyRate;
        FinalCost.textContent = totalCost.toString();
    }

