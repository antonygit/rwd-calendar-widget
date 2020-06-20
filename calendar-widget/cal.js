let yearChosen = new Date().getFullYear();
let monthChosen = new Date().getMonth();
var currentDate = new Date().getDate();
let startWeek = 0;

let months = [
    "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"
]

 
var now = new Date();


function prev() {
      
    current = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    now = current;


    renderCal(getNumberOfDays(current.getFullYear(), months[current.getMonth()]), months[current.getMonth()], current.getFullYear());
}


function next() {
     current = new Date(now.getFullYear(), now.getMonth() +1, 1);
     now = current;

    renderCal(getNumberOfDays(current.getFullYear(),months[current.getMonth()]), months[current.getMonth()], current.getFullYear());
 


}

function getSelMonth(getDate) {

    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    var theCDate = new Date(getDate);

    return months[theCDate.getMonth()];
}


function getSelYear(getDate) {

    var theCDate = new Date(getDate);

    return theCDate.getFullYear();
}



function getNumberOfDays(year, month) {


    let numDays = new Date(year, months.indexOf(month) + 1, 0).getDate();
    return numDays;
}

function renderCal(getNumDays, month, year) {
 
    let yearPTag = document.getElementById("year");
    yearPTag.innerText = year;
    let montPTag = document.getElementById("month");
    montPTag.innerHTML = month;
    let date = month + " " + 1 + " ," + year;
    let dayOfWeek = new Date(date).getDay();

    var j = 1;

    for (let i = 1; i <= 37; i++) {
        document.getElementById(i.toString()).innerText = "";

    }


    try {
        for (let i = 1; i <= getNumDays;) {

            if (startWeek == dayOfWeek) {
                document.getElementById(j.toString()).innerText = i;
                i++;
                j++;
    
            } else {
                document.getElementById(j.toString()).innerText = "";
    
                startWeek = startWeek + 1;
                j++;
            }
            if (currentDate == i && year == yearChosen && months[monthChosen] === month) {
                document.getElementById(j.toString()).classList.add("current");
    
            } 
            else if (document.getElementById(j.toString()).classList.contains("current")) {
                document.getElementById(j.toString()).classList.remove("current")
              } 
         
           
        }
    
        
    }

    catch (e)
    {
    }
  
    startWeek = 0;
}

renderCal(getNumberOfDays(now.getFullYear(),months[now.getMonth()]), months[now.getMonth()], now.getFullYear());


var currentActive = "25";

function clickDays() {
    document.addEventListener('click', function(event) {

        try {
            if (event.target.id != "" && parseInt(event.target.id) > 1) {
                document.getElementById(currentActive).classList.remove("active");
                const id = event.target.id;
                currentActive = id;
                var element = document.getElementById(id);
                element.classList.add("active");
            }

        } catch (error) {
            console.log(error)
        }

        event.stopPropagation()

    });


}



function clickMonth() {
    document.addEventListener('click', function (event) {
 
        if (event.target.className === 'month-name') {
            document.getElementById("monthContainer").classList.remove("container-month--visible");
            document.getElementById("monthContainer").classList.add("container-month--hide");
            document.getElementById("daysContainer").classList.add("container-days--visible");
            document.getElementById("daysContainer").classList.remove("container-days--hide");
            let date = event.target.id + " " + 1 + " ," + now.getFullYear();

            now = new Date(date);
 
            renderCal(getNumberOfDays(now.getFullYear(), months[now.getMonth()]), months[now.getMonth()], now.getFullYear());
        }
 
    });

 


}


function clickYear() {
    document.addEventListener('click', function (event) {
 
        if (event.target.className === 'year-name') {
            document.getElementById("yearContainer").classList.remove("container-year--visible");
            document.getElementById("yearContainer").classList.add("container-year--hide");
            document.getElementById("daysContainer").classList.add("container-days--visible");
            document.getElementById("daysContainer").classList.remove("container-days--hide");
            let date =  months[now.getMonth()]+ " " + 1 + " ," + event.target.id;

            now = new Date(date);
 
            renderCal(getNumberOfDays(now.getFullYear(), months[now.getMonth()]), months[now.getMonth()], now.getFullYear());
        }
 
    });

 


}


 

function selectMonth()
{
    if (document.getElementById("monthContainer").classList.contains("container-month--hide"))
    {
         document.getElementById("monthContainer").classList.remove("container-month--hide");
        document.getElementById("monthContainer").classList.add("container-month--visible");  

        document.getElementById("daysContainer").classList.remove("container-days--visible");
        document.getElementById("daysContainer").classList.add("container-days--hide");  

        
    }
    else {
        document.getElementById("monthContainer").classList.remove("container-month--visible");
        document.getElementById("monthContainer").classList.add("container-month--hide"); 

        document.getElementById("daysContainer").classList.add("container-days--visible");
        document.getElementById("daysContainer").classList.remove("container-days--hide");  
        
    }
    
}




function selectYear()
{
    if (document.getElementById("yearContainer").classList.contains("container-year--hide"))
    {
         document.getElementById("yearContainer").classList.remove("container-year--hide");
        document.getElementById("yearContainer").classList.add("container-year--visible");  

        document.getElementById("daysContainer").classList.remove("container-days--visible");
        document.getElementById("daysContainer").classList.add("container-days--hide");  

        
    }
    else {
        document.getElementById("yearContainer").classList.remove("container-year--visible");
        document.getElementById("yearContainer").classList.add("container-year--hide"); 

        document.getElementById("daysContainer").classList.add("container-days--visible");
        document.getElementById("daysContainer").classList.remove("container-days--hide");  
        
    }
    
}