import axios from "axios";

const getList = async () => {
  try {
    const listPost = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(listPost.data.results);
  } catch (err) {
    console.log(err);
  }
};

getList();

async function getpokemon(id:number) {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(pokemon.data);
}

getpokemon(3)