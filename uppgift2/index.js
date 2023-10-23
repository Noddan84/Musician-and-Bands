//import Bands from "./bands.json";
//import Musicians from "./musicians.json";
import Musician from "./musician.js";
import Band from "./band.js";
import middleList from "./middleList.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
const mdlList = new middleList();
//const mdlList2 = new middleList();

let running = true; //Programmet körs - på/av

function switchMenu(number) //Switch-menyn
{

  switch (number) {
    case 1:
      mdlList.addBandToList();
      console.log("Band added");

      

      break;

    case 2:
      mdlList.addMusicianToList();
      console.log("Musician added");

      break;

    case 3:
      removeBand();
      console.log("Band was removed! ");

      break;

    case 4:
      removeMusician();
      console.log("Musician was removed");

      break;

    case 5:
      infoList.addMusicianToBand(prompt("Add a musician to a band. "));
      console.log("A musician was added to a band");

      break;

    case 6:
      infoList.addBandToMusician(prompt("Add a band to a musician. "));
      console.log("A band was added to a musician");

      break;

    case 7:
      console.log("Musician info");

      break;

    case 8:
      console.log("Band info");

      break;

    case 9:
      console.log("Program ends!");
      running = false;

      break;


    default: // Felinmatning
      console.log("You must write a number from the menu!");

      break;
  }
}


function codeCreator() {
   return ".:. CODE BY NODDAN84 .:.\n";
}

function welcomeMenu()
{
  return `::: Hi and welcome to my Band/Musician-program! :::
  ::: [ M E N U ] :::
  [1] - Add a band
  [2] - Add a musician to a band
  [3] - Add a musician
  [4] - Add a band to a musician
  [5] - Remove a band
  [6] - Remove a musician
  [7] - Show a musicians information
  [8] - Show a bands information
  [9] - Finish the program`;
}


console.log(codeCreator());
console.log(welcomeMenu());

while (running) {
  switchMenu(Number(prompt("Please select an option in Menu - Only numbers!")));
}



