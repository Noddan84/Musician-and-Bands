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
      console.log("________________________________________");
      console.log("Indexnumber: " + `${i + 1}`)
      console.log("Musicgenre: " + `${this.bandList[i].bandInfo}`);
      console.log("Bandname: " + `${this.bandList[i].bandName}`);
      console.log("Birthyear: " + `${this.bandList[i].bandBirth}`);
      console.log("Retireyear: " + `${this.bandList[i].bandRetire}`);
      console.log("Bandmembers: " + `${this.bandList[i].bandMusicians}`);
      console.log("________________________________________");
    }
  }

  showMusicianInfo() {
    for (let i = 0; i < this.musicianList.length; i++) {
      console.log("________________________________________");
      console.log("Indexnumber: " + `${i + 1}`);
      console.log("Musicgenre: " + `${this.musicianList[i].musicianInfo}`);
      console.log("Name: " + `${this.musicianList[i].musicianName}`);
      console.log("Instrument: " + `${this.musicianList[i].musicianInstrument}`);
      console.log("Bandname: " + `${this.musicianList[i].musicianBand}`);
      console.log("Birthyear: " + `${this.musicianList[i].musicianBirth}`)
      console.log("________________________________________");
    }
  }

  addBandToList() {
    let bandName = prompt("What's the name of the band?");
    let bandInfo = prompt("Into what genre does the band play?");
    let bandBirth = prompt("When was the band created?");
    let bandRetire = prompt("When did the band retire?");
    this.bandList.push(new Band(bandName, bandInfo, bandBirth, bandRetire));
    console.log("add band to list");
    this.updateJsonFile();    
  }

  addBandToMusician(indexBand2, indexMusician2) {
    this.musicianList[indexMusician2].musicianBand = this.bandList[indexBand2];
    this.updateJsonFile2();
  }

  addMusicianToList() {
    let musicianName = prompt("What's the name of the musician?");
    let musicianInfo = prompt("What music does the musician play?");
    let musicianInstrument = prompt("What instrument does the musician play?");
    let musicianBand = prompt("Name a band this musician plays in.");
    let musicianBirth = prompt("Write birth of musician.");
    const currentYear = new Date().getFullYear(); 
    console.log("Musicians age is: ");
    console.log((currentYear - musicianBirth));    
    this.musicianList.push(new Musician(musicianName, musicianInfo, musicianInstrument, musicianBand, musicianBirth));
    console.log("Add musician to list");
    this.updateJsonFile2();
  }

  addMusicianToBand(indexBand, indexMusician) {
    this.bandList[indexBand].bandMusicians.push(this.musicianList[indexMusician]);
    console.log(this.bandList[indexBand].bandMusicians);
    this.updateJsonFile();
  }

  removeMusicianFromBand(bandIndex, musicianIndex) {
    const bandMembers = this.bandList[bandIndex].bandMusicians
    const removeFormerMembers = bandMembers.splice(musicianIndex, 1);
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
    const select = prompt("Write indexnumber for the band you want to remove: ");
    if (Number(select).toString() === "NaN") {
      console.log("Please write a number!");
    }
    if (select <= this.getLength() && select >= 1) {
      this.removeBandFromList(Number(select) - 1);
    } else {
      console.log(`Number must be between 1 and ${this.getLength()}`);
    }
  }

  removeMusician() {
    this.showMusicianInfo();
    const select2 = prompt("Write indexnumber for the musician you want to remove: ");
    if (Number(select2).toString() === "NaN") {
      console.log("Please write a number!");
    }
    if (select2 <= this.getLength2() && select2 >= 1) {
      this.removeMusicianFromList(Number(select2) - 1);
    } else {
      console.log(`Number must be between 1 and ${this.getLength2()}`);
    }
  }

  getLength() {
    return this.bandList.length;
  }

  getLength2() {
    return this.musicianList.length;
  }

  updateJsonFile() {
    let tempList = [];
    for (let i = 0; i < this.bandList.length; i++) {
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
      tempList2.push(this.musicianList[i]);
    }
    fs.writeFileSync("./musicians.json", JSON.stringify(tempList2, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}