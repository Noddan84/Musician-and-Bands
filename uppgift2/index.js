//import Bands from "./bands.json";
//import Musicians from "./musicians.json";
import Musician from "./musician.js";
import Band from "./band.js";
import middleList from "./middleList.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true })
const mdlList = new middleList();


let running = true; //Programmet körs - på/av

function switchMenu(number) //Switch-menyn
{

  switch (number) {
    case 1:
      mdlList.addBandToList();
      console.log("Band added");
      break;

    case 2:
      mdlList.removeBand();
      console.log("Band was removed! ");
      break;

    case 3:
      console.log("Band info");
      mdlList.showBandInfo();

      break;

    case 4:
      mdlList.addMusicianToList();
      console.log("Musician added");

      break;

    case 5:
      mdlList.removeMusician();
      console.log("Musician was removed");

      break;

    case 6:
      console.log("Musician info");
      mdlList.showMusicianInfo();

      break;

    case 7:
      console.log("Add musician to band")
      mdlList.showBandInfo()
      const indexBand = Number(prompt("Skriv in nr på band du vill lägga till artisten: "))
      //indexBand--
      mdlList.showMusicianInfo()
      const indexArtist = Number(prompt("Skriv in nr på musiker du vill lägga till bandet: "))
      //indexArtist--
      mdlList.addMusicianToBand(indexBand - 1, indexArtist - 1)
      console.log("Artist have been added to Band")
    
      break;

    case 8:
      console.log("Remove musician from a band");
      mdlList.showBandInfo();
      const bandIndex = Number(prompt("Skriv in nr på band"));
      mdlList.showMusicianIndexInBand(bandIndex - 1);
      
      //mdlList.showMusicianInfo();
      const musicianIndex = Number(prompt("Skriv in nr på musiker"))
      mdlList.removeMusicianFromBand(bandIndex - 1, musicianIndex - 1);
      break;

    case 9:
      console.log("Add band to musician")
      mdlList.showMusicianInfo()
      const indexArtist2 = Number(prompt("Skriv in nr på artist du vill lägga till bandet: "))
      //indexArtist--
      mdlList.showBandInfo()
      const indexBand2 = Number(prompt("Skriv in nr på band du vill lägga till artisten: "))
      //indexBand--
      mdlList.addBandToMusician(indexBand2 - 1, indexArtist2 - 1)
      console.log("Band have been added to musician")
      break;
    
    case 10:
      break;
    
    case 11:
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
  [1]  - Create a band
  [2]  - Remove a band
  [3]  - Show band info
  [4]  - Create a musician
  [5]  - Remove a musician
  [6]  - Show musician info
  [7]  - Add musician to band
  [8]  - Remove musician from band
  [9]  - Add band to musician
  [10] - Remove band from musician
  [11] - Finish program`
}


console.log(codeCreator());
console.log(welcomeMenu());

while (running) {
  console.log(welcomeMenu());
  switchMenu(Number(prompt("Please select an option in Menu - Only numbers!")));
}



