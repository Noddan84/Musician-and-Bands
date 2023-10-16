import Info from "./info.json";
import Musician from "./musician.js";
import Band from "./band.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync({ sigint: true })



let running = true; //Programmet körs - på/av

function switchMenu(number) //Switch-menyn
{
  switch (number)
  {
    case 1:
      console.log("Band added");      
      return;
      break;
    
    case 2:
      console.log("Musician added");
      return;
      break;
    
    case 3:
      console.log("Band was removed");
      return;
      break;
    
    case 4:
      console.log("Musician was removed");
      return;
      break;
    
    case 5:
      console.log("A musician was added to a band");
      return;
      break;
    
    case 6:
      console.log("A band was added to a musician");
      return;
      break;
    
    case 7:
      console.log("Musician info");
      return;
      break;
    
    case 8:
      console.log("Band info");
      return;
      break;
    
    case 9:
      console.log("Program ends!");
      running = false;
      return;
      break;

    
    default: // Felinmatning
      console.log("You must write a number from the menu!");
      return; 
      break;
  }
}

function welcomeUser()  //Presentation .:. Välkommen + Meny
{
  console.log("Hi and welcome to my Band/Musician-program!");
  console.log("[ M E N U ]");
  console.log("[1] Add a band");
  console.log("[2] Add a musician");
  console.log("[3] Remove a band");
  console.log("[4] Remove a musician");
  console.log("[5] Add a musician to a band");
  console.log("[6] Add a band to a musician");
  console.log("[7] Show a musicians information");
  console.log("[8] Show a bands information");
  console.log("[9] Finish the program")
}

console.log('\x1b[4m\x1b[34m\x1b 9 .:. CODE BY NODDAN84 .:.\x1b[0m\n');
console.log(welcomeUser());
while (running) {
  switchMenu(Number(prompt("Please select an option in Menu - Only numbers!")));
}