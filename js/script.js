
$('.sidemenu').animate({ left: '-260px' }, 300);

$('i.close').on('click', function () {

    $('.sidemenu').animate({ left: '-260px' }, 500);
    $('i.open').fadeToggle(10, function () {
        $('i.close').fadeToggle(200);
   
    })

})

$('i.open').on('click', function () {
    $('.sidemenu').animate({ left: '0' }, 500);
   

    $('i.open').fadeToggle(10, function () {
        $('i.close').fadeToggle(200);
    })

})





async function getmeals() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    let meal = await (response).json();
    meal = meal.meals;
    let cartona = "";

    for (let index = 0; index < meal.length; index++) {
        cartona += `<div onClick="getdetails(${meal[index].idMeal})" class="col-md-3  col-sm-6 ">
        <div class="meals position-relative overflow-hidden my-3">
     <img 
        src="${meal[index].strMealThumb}"
        class="img-fluid rounded-3"
        title=""
        alt=""
    >
            <div class="meals_name rounded-3">
               ${meal[index].strMeal}
            </div>
            
        </div>
    </div>`

    }
    document.querySelector('.mealname').innerHTML = cartona;
    


    console.log(meal);
}




async function searchbyname(letter) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`);
    let meal = await response.json();
    meal = meal.meals;
    let cartona = "";

    for (let index = 0; index < meal.length; index++) {
        cartona += `<div onClick="getdetails(${meal[index].idMeal})" class="col-md-3  col-sm-6 ">
        <div class="meals position-relative overflow-hidden my-3">
     <img 
        src="${meal[index].strMealThumb}"
        class="img-fluid rounded-3"
        title=""
        alt=""
    >
            <div class="meals_name rounded-3">
               ${meal[index].strMeal}
            </div>
            
        </div>
    </div>`

    }
    document.querySelector('.search').innerHTML = cartona;
    console.log(meal);
}


async function searchf_letter(letter) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    let meal = await response.json();
    meal = meal.meals;
    let cartona = "";

    for (let index = 0; index < meal.length; index++) {
        cartona += `<div onClick="getdetails(${meal[index].idMeal})" class="col-md-3  col-sm-6 ">
        <div class="meals position-relative overflow-hidden my-3">
     <img 
        src="${meal[index].strMealThumb}"
        class="img-fluid rounded-3"
        title=""
        alt=""
    >
            <div class="meals_name rounded-3">
               ${meal[index].strMeal}
            </div>
            
        </div>
    </div>`

    }   
    document.querySelector('.search').innerHTML = cartona;
    console.log(meal);
}


async function getdetails(id) {
  
    const responsee = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let details = await responsee.json();
    details = await details.meals[0];
    let cartona = "";

            cartona =`   <div class="col-md-4 my-4 col-sm-6 ">
            <div class="meals position-relative overflow-hidden my-3">
                <img
                    src=" ${details.strMealThumb}"
                    class="img-fluid rounded-3"
                    title=""
                    alt=""
                >
                <div class="fs-4 my-3">
                ${details.strMeal}
                </div>
            </div>
        </div>

        <div class="col-md-8 details my-4">
            <h2>
                Instructions
            </h2>
            <p> 
         ${details.strInstructions}</p>

       <div class="my-2 fw-bolder fs-5 text-capitalize">
        Area : 
        ${details.strArea}
       </div>
       <div class="my-2 fw-bolder fs-5 text-capitalize">
        Category : 
        ${details.strCategory}
       </div>
       <div class="my-3">
        <span> Recipes :
        </span>
        <br/> <span class="recRecipy"> 1 cup Lentils                </span>
        <span class="recRecipy"> 1 cup Lentils                </span>
        <span class="recRecipy"> 1 cup Lentils                </span>
        <span class="recRecipy"> 1 cup Lentils                </span>
        <span class="recRecipy"> 1 cup Lentils                </span>
       </div>
       <div class="my-3">
        <span> Tags  :
        </span><br/>  <span class="tag">  ${details.strTags}         </span>
       </div>
       <div class="my-3">
        <span class="source"><a href="${details.strCategory}"> Source  </a>
        </span> <span class="Youtube"><a href="${details.strYoutube}"> Youtube  </a>    </span>
       </div>
        </div>`
        
      

    document.querySelector('.mealname').innerHTML = cartona;
   $('.search').hide(10);
   $(`.category`).hide(10);
   $(`.aaaa`).hide(10);
   $(`.area`).hide(10);
   $(`.Ingredients`).hide(10);
   $(`.Ingredientmeal`).hide(10);
    console.log(details);
}



async function getCategories() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let data = await response.json();
    data = data.categories;
    let cartona = "";

    for (let index = 0; index < data.length; index++) {
        cartona += `
        <div onClick="allgategory('${data[index].strCategory}')" class="col-md-3  col-sm-6 ">
        <div class="meals position-relative overflow-hidden my-3">
            <img
                src="${data[index].strCategoryThumb}"
                class="img-fluid rounded-3"
                title=""
                alt=""
            >
            <div class="meals_name rounded-3">
            ${data[index].strCategory}
                <p>  ${data[index].strCategoryDescription.slice(0,70)} </p>
            </div>
        </div>
    </div>

      `

    }
    document.querySelector('.category').innerHTML = cartona;
}
async function allgategory(g){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${g}`);
    let allgategory = await response.json();
   
    allgategory = allgategory.meals;
    let cartona = "";

    for (let index = 0; index < allgategory.length; index++) {
        cartona += `<div  onClick="getdetails(${allgategory[index].idMeal})" class="col-md-3  col-sm-6 ">
        <div class="meals position-relative overflow-hidden my-3">
     <img 
        src="${allgategory[index].strMealThumb}"
        class="img-fluid rounded-3"
        title=""
        alt=""
    >
            <div class="meals_name rounded-3">
               ${allgategory[index].strMeal}
            </div>
            
        </div>
    </div>`

    }
    document.querySelector('.category').innerHTML = cartona;
}


async function getmealsArea() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let Area = await response.json();
    Area = Area.meals;
    let cartona = "";

    for (let index = 0; index < Area.length; index++) {
        cartona += `<div  onClick="getmealbysarea('${Area[index].strArea}')" class="col-md-3 text-center  my-2  col-sm-6 ">
       
            <div class="my-4">
                <i class="fa-solid fa-house-laptop fa-5x"></i>
                <h3 class="country mt-2 fw-bold text-capitalize fs-4">${Area[index].strArea}</h3>
            </div>
        
    </div>`

    }
    document.querySelector('.area').innerHTML = cartona;
}


async function getmealbysarea(x) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`);
    let meal = await response.json();
    meal = meal.meals;
    let cartona = "";

    for (let index = 0; index < meal.length; index++) {
        cartona += `<div  onClick="getdetails(${meal[index].idMeal})"  class="col-md-3  col-sm-6 ">
        <div class="meals position-relative overflow-hidden my-3">
     <img 
        src="${meal[index].strMealThumb}"
        class="img-fluid rounded-3"
        title=""
        alt=""
    >
            <div class="meals_name rounded-3">
               ${meal[index].strMeal}
            </div>
            
        </div>
    </div>`

    }
    document.querySelector('.aaaa').innerHTML = cartona;
    console.log(meal);
}
async function getmealsIngredients() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    let Ingredients = await response.json();
    Ingredients = Ingredients.meals;
    let cartona = "";

    for (let index = 0; index < 20; index++) {
        cartona += `<div  onClick="getmealsbyintg('${Ingredients[index].strIngredient}')" class="col-md-3 text-center  my-2  col-sm-6 ">
       
            <div class="my-4">
                <i class="fa-solid fa-house-laptop fa-5x"></i>
                <h3 class="country mt-2 fw-bold text-capitalize fs-4">${Ingredients[index].strIngredient}</h3>
                <p>

                 ${Ingredients[index].strDescription.slice(0,120)}
             
                </p>
                </div>
        
    </div>`

    }
    document.querySelector('.Ingredients').innerHTML = cartona;
}
async function getmealsbyintg(intg) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${intg}`);
    let intgrat = await response.json();
    intgrat = intgrat.meals;
    let cartona = "";

    for (let index = 0; index < intgrat.length; index++) {
        cartona += `<div onClick="getdetails(${intgrat[index].idMeal})" class="col-md-3  col-sm-6 ">
        <div class="meals position-relative overflow-hidden my-3">
     <img 
        src="${intgrat[index].strMealThumb}"
        class="img-fluid rounded-3"
        title=""
        alt=""
    >
            <div class="meals_name rounded-3">
               ${intgrat[index].strMeal}
            </div>
            
        </div>
    </div>`

    }
    document.querySelector('.Ingredientmeal').innerHTML = cartona;
    document.querySelector('.Ingredients').innerHTML = "";



    console.log(meal);
}
submitBtn = document.getElementById("submitBtn")

document.getElementById("nameInput").addEventListener("focus", () => {
    nameInputTouched = true
})

document.getElementById("emailInput").addEventListener("focus", () => {
    emailInputTouched = true
})

document.getElementById("phoneInput").addEventListener("focus", () => {
    phoneInputTouched = true
})

document.getElementById("ageInput").addEventListener("focus", () => {
    ageInputTouched = true
})

document.getElementById("passwordInput").addEventListener("focus", () => {
    passwordInputTouched = true
})

document.getElementById("repasswordInput").addEventListener("focus", () => {
    repasswordInputTouched = true
})


let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
if (nameInputTouched) {
    if (nameValidation()) {
        document.getElementById("nameAlert").classList.replace("d-block", "d-none")

    } else {
        document.getElementById("nameAlert").classList.replace("d-none", "d-block")

    }
}
if (emailInputTouched) {

    if (emailValidation()) {
        document.getElementById("emailAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("emailAlert").classList.replace("d-none", "d-block")

    }
}

if (phoneInputTouched) {
    if (phoneValidation()) {
        document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

    }
}

if (ageInputTouched) {
    if (ageValidation()) {
        document.getElementById("ageAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("ageAlert").classList.replace("d-none", "d-block")

    }
}

if (passwordInputTouched) {
    if (passwordValidation()) {
        document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

    }
}
if (repasswordInputTouched) {
    if (repasswordValidation()) {
        document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

    }
}


if (nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()) {
    submitBtn.removeAttribute("disabled")
} else {
    submitBtn.setAttribute("disabled", true)
}
}

function nameValidation() {
return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}