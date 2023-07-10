#!/usr/bin/env node

// const yargs = require("yargs");
// const { argv } = yargs(process.argv);

const inquirer = require("inquirer");

const fetch = require("node-fetch");
const printFiveMoves = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({ move }) => move.name);
    console.log(moves.slice(0, 5));
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon to see it's first 5 moves",
  },
]).then((answers) => {
  const pokemon = answers.pokemon;
  printFiveMoves(pokemon);
});

//Another way to fetch data
// let url = `https://pokeapi.co/api/v2/pokemon/charmander`;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     // Process the retrieved data
//     const moves = data.moves.map(({ move }) => move.name);
//     console.log(moves.slice(0, 5));
//     // console.log(data);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.error("Error:", error);
//   });
