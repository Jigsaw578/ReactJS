let Menu = []

let foods = document.querySelector(".container div")

function getmenu (){
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res) =>{
        Menu = res.data
        console.log(Menu);
        render()
    })
}

function render(){
    const food = Menu.meals.map( function(menu) {
        return `
            <div class="content d-flex flex-row p-2 border-bottom border-2">
            <img src="${menu.strMealThumb}" style="width: 100px;" alt="">
            <p class="m-2">${menu.strMeal}</p>
            </div>
        `
    })

    foods.innerHTML = food.join("")
}

getmenu()