import fs from "fs";
import Band from "./band.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync({ sigint: true })
import Musician from "./musician.js";

export default class middleList {

  bandList = [];
  bandID = {};
  musicianList = [];
  musicianID = {};
  

  constructor() {
    this.fetchBandData();
    this.fetchMusicianData();
    
  }

  get bandList() {
    return this.bandList;
  }

  get musicianList() {
    return this.musicianList;
  }

  get BandAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.bandBirth;

  }

  get MusicianAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.musicianBirth;
  }

  fetchBandData() {

    const data = fs.readFileSync("bands.json");
    this.bandList = JSON.parse(data);
  }

  fetchMusicianData() {

    const data2 = fs.readFileSync("musicians.json");
    this.musicianList = JSON.parse(data2);
  }




  showBandInfo() {
    for (let i = 0; i < this.bandList.length; i++) {
      console.log(`${i + 1}. ${this.bandList[i].bandInfo}`); //skriver ut namn från bandklassen
      console.log(`${i + 1}. ${this.bandList[i].bandName}`);      
      console.log(`${i + 1}. ${this.bandList[i].bandBirth}`);
      console.log(`${i + 1}. ${this.bandList[i].bandRetire}`);
      console.log(`${i + 1}. ${this.bandList[i].bandMusicians}`);      
    }
  }

  showMusicianInfo() {
    for (let i = 0; i < this.musicianList.length; i++) {
      console.log(`${i + 1}. ${this.musicianList[i].musicianInfo}`); //skriver ut namn från bandklassen
      console.log(`${i + 1}. ${this.musicianList[i].musicianName}`);
      console.log(`${i + 1}. ${this.musicianList[i].musicianInstrument}`);
      console.log(`${i + 1}. ${this.musicianList[i].musicianBand}`);      
    }
  }

  addBandToList() {
    let bandName = prompt("What's the name of the band?");
    let bandInfo = prompt("Into what genre does the band play?");
    let bandBirth = prompt("When was the band created?");
    let bandRetire = prompt("When did the band retire?");

    this.bandList.push(new Band(bandName, bandInfo, bandBirth, bandRetire));
    

    console.log("add band to list");
    this.updateJsonFile(); //uppdaterar bands.json    
  }

  addBandToMusician(indexBand2, indexMusician2) {
    this.musicianList[indexMusician2].musicianBand = this.bandList[indexBand2];
    // console.log(this.artistList[indexArtist2].memberInfo);
    this.updateJsonFile2();

  }

  addMusicianToList() {
    let musicianName = prompt("What's the name of the musician?");
    let musicianInfo = prompt("What music does the musician play?");
    let musicianInstrument = prompt("What instrument does the musician play?");
    let musicianBand = prompt("Name a band this musician plays in.");

    this.musicianList.push(new Musician(musicianName, musicianInfo, musicianInstrument, musicianBand));

    console.log("add musician to list");
    this.updateJsonFile2(); //uppdaterar musicians.json
  }

  addMusicianToBand(indexBand, indexMusician) {

    this.bandList[indexBand].bandMusicians.push(this.musicianList[indexMusician]);
    console.log(this.bandList[indexBand].bandMusicians);
    this.updateJsonFile();
  }

  removeMusicianFromBand(bandIndex, musicianIndex) {
    const bandMembers = this.bandList[bandIndex].bandMusicians
    
    const removeFormerMembers = bandMembers.splice(musicianIndex, 1);
    console.log("HEJ")
    
    console.log(removeFormerMembers);
    this.bandList[bandIndex].musicianInfo = bandMembers
   this.bandList[bandIndex].formerMembers.push(removeFormerMembers)
    this.updateJsonFile();
  }

  showMusicianIndexInBand(index) {

    console.log(this.bandList[index].bandMusicians);
  }

  removeBandFromMusicians(bandIndex2, artistIndex2) {
    this.musicianList[bandIndex2].musicianBand = this.bandList[artistIndex2];
    this.updateJsonFile2();
  }




  removeBandFromList(index) {
    this.bandList.splice(index, 1);
    this.showBandInfo();
    this.updateJsonFile();
  }

  removeMusicianFromList(index) {
    this.musicianList.splice(index, 1);
    this.showMusicianInfo();
    this.updateJsonFile2();
  }

  removeBand() {
    this.showBandInfo();
  
  const select = prompt("Skriv in index för det band du vill ta bort ->");

  if (Number(select).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
    console.log("Vänligen skriv in ett tal!");
  }
  if (select <= this.getLength() && select >= 1) {
    this.removeBandFromList(Number(select) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)
    
  } else {
    console.log(`Talet måste vara mellan 1 och ${this.getLength()}`);
  }
  }
  
  removeMusician() {
    this.showMusicianInfo();

    const select2 = prompt("Skriv in index för den musiker du vill ta bort ->");

    if (Number(select2).toString() === "NaN") { // Kollar så att val går att parsa till ett nummer.
      console.log("Vänligen skriv in ett tal!");
    }
    if (select2 <= this.getLength2() && select2 >= 1) {
      this.removeMusicianFromList(Number(select2) - 1); // Tar det inskrivna valet och minskar med 1. (för arrays index börjar på 0)

    } else {
      console.log(`Talet måste vara mellan 1 och ${this.getLength2()}`);
    }
  }

  getLength() {
    return this.bandList.length;
  }

  getLength2()
  {
    return this.musicianList.length;
  }

  updateJsonFile() {
    let tempList = [];

    for (let i = 0; i < this.bandList.length; i++) {
      //console.log(this.bandList.length);
      tempList.push(this.bandList[i]);
    }
    fs.writeFileSync("./bands.json", JSON.stringify(tempList, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }

  updateJsonFile2() {
    let tempList2 = [];

    for (let i = 0; i < this.musicianList.length; i++) {
      //console.log(this.musicianList.length);
      tempList2.push(this.musicianList[i]);
    }
    fs.writeFileSync("./musicians.json", JSON.stringify(tempList2, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}