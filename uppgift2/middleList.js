import fs from "fs";
import Band from "./band.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync({ sigint: true })
import Musician from "./musician.js";

export default class middleList {

  bandList = []; //en array med bandobjekt
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


    //console.log(this.bandList.length);
    for (let i = 0; i < this.bandList.length; i++) {
      this.bandList.push(new Band(this.bandList[i].bandName, this.bandList[i].bandInfo, this.bandList[i].bandBirth, this.bandList[i].bandRetire));

    }
    //console.log(this.bandList.length);

  }

  fetchMusicianData() {

    const data2 = fs.readFileSync("musicians.json");
    this.musicianList = JSON.parse(data2);


    //console.log(this.musicianList.length);
    for (let i = 0; i < this.musicianList.length; i++) {
      this.musicianList.push(new Musician(this.musicianList[i].musicianName, this.musicianList[i].musicianInfo, this.musicianList[i].musicianInstrument, this.musicianList[i].musicianBand));

    }
    //console.log(this.musicianList.length);

  }




  showBandInfo() {
    for (let i = 0; i < this.bandList.length; i++) {
      console.log(`${i + 1}. ${this.bandList[i].bandInfo}`); //skriver ut namn från bandklassen
      console.log(`${i + 1}. ${this.bandList[i].bandName}`);
      console.log(`${i + 1}. ${this.bandList[i].bandAge}`);
      console.log(`${i + 1}. ${this.bandList[i].bandBirth}`);
      console.log(`${i + 1}. ${this.bandList[i].bandRetire}`);
      console.log(`${i + 1}. ${this.bandList[i].bandMusicians}`);
      console.log(`${i + 1}. ${this.bandList[i].formerMembers}`);
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

  addMusicianToList() {
    let musicianName = prompt("What's the name of the musician?");
    let musicianInfo = prompt("What music does the musician play?");
    let musicianInstrument = prompt("What instrument does the musician play?");
    let musicianBand = prompt("Name a band this musician plays in.");

    this.musicianList.push(new Musician(musicianName, musicianInfo, musicianInstrument, musicianBand));

    console.log("add musician to list");
    this.updateJsonFile2(); //uppdaterar musicians.json
  }

  removeBandfromList(index) {
    this.bandList.splice(index, 1);
    this.updateJsonFile();
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
      tempList.push(this.bandList[i].dataInfoBand());
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
      tempList2.push(this.musicianList[i].dataInfoMusician());
    }
    fs.writeFileSync("./musicians.json", JSON.stringify(tempList2, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  }
}