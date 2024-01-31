//⭐⭐⭐ Loading Page :-

$(document).ready(function () {
    $(".fa-spin").fadeOut(1000 , function(){
        $(".loading").fadeOut(1000 ,function(){
            $(".loading").remove();
        });
    });
    getHomeData();
});

//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Sidebar close and open with J-Query :-

var innerWidth = $("#sideBarInner").innerWidth();

$("#sideBar").css("left", -innerWidth); // yb2a m2fol mn l awel 

$(".fa-list-ul").click(function () { 
    if( $("#sideBar").css('left') == "0px"){   //Y3ni lo el sidebar opened

        $("#sideBar").animate({left:- innerWidth},500);   // 22flo
        $("#mainIcon").removeClass("fa-xmark").addClass("fa-list-ul");   
    }
    else{  
        $("#sideBar").animate({left:"0px"},500);  // aft7oo
        $("#mainIcon").removeClass("fa-list-ul").addClass("fa-xmark");  
    }
});

//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Get API of starting page :- 

var homeList = []; 

async function getHomeData(){
    var apiResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")  ;
    var apiData = await apiResponse.json() ;

    displayHomeData(apiData)
}
getHomeData();

function displayHomeData(homeList){
    let cartona = ''
    for(var i = 0 ; i < homeList.meals.length ; i++){
        cartona += `  <div class="col-md-3">
        <div class="meal">
            <img class="w-100" src="${homeList.meals[i].strMealThumb}" alt="meal photo">
            <div onclick="getMealData(${homeList.meals[i].idMeal})" class="bg-light bg-opacity-75 p-3 fw-bold layer"><p class="fs-4">${homeList.meals[i].strMeal}</p></div>
        </div>
    </div>`
    }
    document.getElementById("box").innerHTML = cartona ;
    document.getElementById("inputsBox").style.display = "none"
}

//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Get API of Categories page :- 


async function filterByCatego(catego){   // wa5da paramter feh l asm 3shan tgyb m3lomat no3 dh bs
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catego}`);
    var apiData = await apiResponse.json();

    displayHomeData(apiData);  // ro7 nady l display l awlanya bs b3tlha object feh m3lomat no3 dh bs

}


var categoList = [];

async function geCategoData(){
    var apiResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")  ;
    var apiData = await apiResponse.json() ;
    categoList = apiData ;

    displayCategoData();
}

function displayCategoData(){
    let cartona = ''
    for(var i = 0 ; i < categoList.categories.length ; i++){
        cartona += `  <div class="col-md-3">
        <div class="meal2">
            <img class="w-100" src="${categoList.categories[i].strCategoryThumb}" alt="meal photo">
            <div onclick="filterByCatego('${categoList.categories[i].strCategory}')" class="text-center bg-light bg-opacity-75 p-4 pt-2 layer2">
            <p class="fw-bolder fs-4 pb-0 mb-1">${categoList.categories[i].strCategory}</p>
            <p class="desc pt-0 mt-0">${categoList.categories[i].strCategoryDescription}</p>
            </div>
        </div>
    </div>`
    }

    document.getElementById("box").innerHTML = cartona ;
    document.getElementById("inputsBox").style.display = "none"

    $("#sideBar").animate({left:- innerWidth},500); 
    $("#mainIcon").removeClass("fa-xmark").addClass("fa-list-ul");   
}
//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Get API of Area page :- 


async function filterByArea(area){  // wa5da paramter mn t7t feh l asm 3shan tgyb m3lomat area di bs
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    var apiData = await apiResponse.json();

    displayHomeData(apiData); // ro7 nady l display l awlanya bs b3tlha object feh m3lomat area di

}

var areaList = [];

async function getAreaData(){
    var apiResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")  ;
    var apiData = await apiResponse.json() ;
    areaList = apiData ;

    displayAreaData();
}

function displayAreaData(){
    let cartona = ''
    for(var i = 0 ; i < areaList.meals.length ; i++){
        cartona += `<div class="col-md-3 country">
        <div onclick="filterByArea('${areaList.meals[i].strArea}')" class="text-center text-white bg-dark bg-opacity-75 p-3 pb-0 rounded-4">
            <i class="fa-solid fa-map-location-dot fs-2" style="color: #ffffff;"></i>
            <p class="fs-3 pb-2 fw-bold">${areaList.meals[i].strArea}</p>
        </div>
    </div>`
    }

    document.getElementById("box").innerHTML = cartona ;
    document.getElementById("inputsBox").style.display = "none"

    $("#sideBar").animate({left:- innerWidth},500); 
    $("#mainIcon").removeClass("fa-xmark").addClass("fa-list-ul");   
}
//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Get API of Ingrediants page :- 


async function filterByIngred(ingred){  // wa5da paramter mn t7t feh l asm 3shan tgyb m3lomat ingred di bs
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`);
    var apiData = await apiResponse.json();

    displayHomeData(apiData); // ro7 nady l display l awlanya bs b3tlha object feh m3lomat ingred di

}

var ingredList = [];

async function getIngredData(){
    var apiResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")  ;
    var apiData = await apiResponse.json() ;
    ingredList = apiData ;

    displayIngredData();
}

function displayIngredData(){
    let cartona = ''
    for(var i = 0 ; i < 20 ; i++){
        cartona += `  <div class="col-md-3">
        <div onclick="filterByIngred('${ingredList.meals[i].strIngredient}')"  class="ingred text-center text-white bg-dark bg-opacity-75 p-3 overflow-hidden rounded-4">
            <img class="ingredImage pb-2" src="https://www.themealdb.com/images/ingredients/${ingredList.meals[i].strIngredient}-Small.png">
            <h3 class="pb-2 fs-5">${ingredList.meals[i].strIngredient}</h3>
            <p>${ingredList.meals[i].strDescription}</p>
        </div>
    </div>`
    }

    document.getElementById("box").innerHTML = cartona ;
    document.getElementById("inputsBox").style.display = "none"

    $("#sideBar").animate({left:- innerWidth},500); 
    $("#mainIcon").removeClass("fa-xmark").addClass("fa-list-ul");   
}
//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Get API of Search page :- 

let nameInput = document.getElementById("nameInput");

nameInput.addEventListener("keyup" , function(){
    getSearchData(nameInput.value);
})

var searchList = []

async function getSearchData(x){
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`);
    var apiData = await apiResponse.json() ;
    searchList = apiData ;

    document.getElementById("inputsBox").style.display = "block"
    document.getElementById("box").innerHTML = '' ;


    $("#sideBar").animate({left:- innerWidth},500); 
    $("#mainIcon").removeClass("fa-xmark").addClass("fa-list-ul");  

    displaySearchData();
}

function displaySearchData(){
    let cartona = ''
    for(var i = 0 ; i < searchList.meals.length ; i++){
        cartona += `  <div class="col-md-3">
        <div class="meal">
            <img class="w-100" src="${searchList.meals[i].strMealThumb}" alt="meal photo">
            <div class="bg-light bg-opacity-75 p-3 fw-bold layer"><p class="fs-4">${searchList.meals[i].strMeal}</p></div>
        </div>
    </div>`
    }
    document.getElementById("box").innerHTML = cartona ;   
}

//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

let letterInput = document.getElementById("letterInput");

letterInput.addEventListener("keyup" , function(){
    getSearchData2(letterInput.value);
})

var searchList2 = []

async function getSearchData2(y){
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${y}`);
    var apiData = await apiResponse.json() ;
    searchList2 = apiData ;

    document.getElementById("box").innerHTML = '' ;

    displaySearchData2();
}

function displaySearchData2(){
    let cartona = ''
    for(var i = 0 ; i < searchList2.meals.length ; i++){
        cartona += `  <div class="col-md-3">
        <div class="meal">
            <img class="w-100" src="${searchList2.meals[i].strMealThumb}" alt="meal photo">
            <div class="bg-light bg-opacity-75 p-3 fw-bold layer"><p class="fs-4">${searchList2.meals[i].strMeal}</p></div>
        </div>
    </div>`
    }
    document.getElementById("box").innerHTML = cartona ;   
}
//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Show Contact page :- 

function showContactPage(){

    var temp = `<div id="contact" class="pe-0 pt-5">
    <form class="row g-4 p-4 pt-5 justify-content-center justify-content-around">
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="Enter your name">
    </div>
    <div class="col-md-6">
      <input type="email" class="form-control" placeholder="Enter your email">
    </div>
    <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Enter your phone">
    </div>
    <div class="col-md-6">
        <input type="number" class="form-control" placeholder="Enter your age">
    </div>
    <div class="col-md-6">
        <input type="password" class="form-control" placeholder="Enter your password">
    </div>
    <div class="col-md-6">
        <input type="password" class="form-control" placeholder="re-password">
    </div>
    <div class="text-center">
        <button type="button" class="btn btn-light">Submit</button>
    </div>
    </form></div>`

    document.getElementById("box").innerHTML = temp ;
    document.getElementById("inputsBox").style.display = "none" ;


    $("#sideBar").animate({left:- innerWidth},500); 
    $("#mainIcon").removeClass("fa-xmark").addClass("fa-list-ul"); 
}
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//⭐⭐⭐ Show home page meal details :- 

var details = [];

async function getMealData(id){
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)  ;
    var apiData = await apiResponse.json() ;
    details = apiData ;

    displayMealData()
}

function displayMealData(){
    let cartona = ''
    for(var i = 0 ; i < 1 ; i++){

        cartona += ` <div class="bg-dark row openBox text-white pt-4 pb-3 rounded-4">

        <div class="col-md-4">
            <img src="${details.meals[i].strMealThumb}" class="w-100 rounded-3">
            <p class="fs-3 fw-bold">${details.meals[i].strMeal}</p>
        </div>

        <div class="col-md-8">

            <h2>Instructions</h2>
            <p>${details.meals[i].strInstructions}</p>
            <h3><span>Area</span> : ${details.meals[i].strArea}</h3>
            <h3><span>Category</span> : ${details.meals[i].strCategory}</h3>
            <h3>Recipes :</h3>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure1} ${details.meals[i].strIngredient1}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure2} ${details.meals[i].strIngredient2}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure3} ${details.meals[i].strIngredient3}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure4} ${details.meals[i].strIngredient4}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure5} ${details.meals[i].strIngredient5}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure6} ${details.meals[i].strIngredient6}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure7} ${details.meals[i].strIngredient7}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure8} ${details.meals[i].strIngredient8}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure9} ${details.meals[i].strIngredient9}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure10} ${details.meals[i].strIngredient10}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure11} ${details.meals[i].strIngredient11}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure12} ${details.meals[i].strIngredient12}</span>
            <span class="mySpan btn bg-info-subtle mt-2 mb-2">${details.meals[i].strMeasure13} ${details.meals[i].strIngredient13}</span>
            <h3 class="mt-2">Tags :</h3>
            <h3 class="mySpan btn bg-info mt-2 mb-2">${details.meals[i].strTags}<h3/>
            <a class="btn btn-success" href="${details.meals[i].strYoutube}"target="_blank">Source</a>
            <a class="btn btn-danger" href="${details.meals[i].strSource}"target="_blank">Youtube</a>
        </div>

    </div>`
    }

    document.getElementById("box").innerHTML = cartona ;

    $("#sideBar").animate({left:- innerWidth},500); 
    $("#mainIcon").removeClass("fa-xmark").addClass("fa-list-ul"); 
}
//----------------------------------------------------------------------------------------------------

//Explanation of code :-

// kol li hnak fl HTML mrbota b function lma bdos 3leha l fucntion btsht8l w t3rd 7aga fl html
// fi function hyb2a gwa 7aga btnady function tania f hyb2a function tnady function w tb3tlha paramter w hakza 
// div l inputs hwa m5fy bs mktob fl HTML , w byhzrh w y5tfy 7sb l function , hyzhr m3 search function bs