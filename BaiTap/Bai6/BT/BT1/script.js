let pokemons = [];
let id = 0;
const pokemonname = document.querySelector(".right div");

const showindexs = pokemonname.querySelectorAll("div button");

const pokemonimg = document.querySelector(".left div .img");

const pokemontype = document.querySelector(".left div .type");
function getpokemon(id) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
    pokemons[id] = res.data;
    render();
  });
}

function render() {
  const pokemonnames = pokemons.map(function (pokemon) {
    return `
        <div class="m-2 border-dark border rounded p-2">
            <button class="border-0 bg-white" onclick="handleShow(${pokemon.id})">${pokemon.id}. ${pokemon.name}</button>
          </div>
        `;
  });

  pokemonname.innerHTML = pokemonnames.join("");

  // showindexs.forEach((showindex, index) =>{
  //     showindex.addEventListener("click", () =>{
  //         console.log(555,index);
  //         handleShow(index)
  //     })
  // })
}

function handleShow(id) {
  let Showpokemonimg = `
            <img
            class="border border-dark rounded" style="width: 280px;"
              src=${pokemons[id].sprites.front_default}
              alt=""
            />
        `;
  pokemonimg.innerHTML = Showpokemonimg;

  var Showpokemontype = [];
  // for (let j = 0; j < pokemons[id].types.length; j++) {
  //   Showpokemontype[j] = [pokemons[id].types[j]].map((pokemon) => {
  //     return `
  //                   <div class="col-5 border border-dark rounded m-2 text-center pt-2">
  //                   <p>${pokemon.type.name}</p>
  //               </div>
  //           `;
  //   });
  //   pokemontype.innerHTML = Showpokemontype.join("");
  // }
    Showpokemontype = (pokemons[id].types).map((pokemon) => {
      return `
                    <div class="col-5 border border-dark rounded m-2 text-center pt-2">
                    <p>${pokemon.type.name}</p>
                </div>
            `;
    });
    pokemontype.innerHTML = Showpokemontype.join("");
}

for (let id = 1; id <= 20; id++) {
  getpokemon(id);
}
