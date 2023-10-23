export default class Musician {
  
  musicianName;
  musicianInfo; 
  musicianInstrument;
  musicianBand;  
  musicianBandHistory;

  constructor(musicianName, musicianInfo, musicianInstrument, musicianBand, musicianBandHistory) {
    
    this.musicianName = musicianName;
    this.musicianInfo = musicianInfo;
    this.musicianInstrument = musicianInstrument;
    this.musicianBand = musicianBand;    
    this.musicianBandHistory = musicianBandHistory;
  }

  

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.musicianBirth;
  }

  getFormerBands() {
    return this.musicianBandHistory;
  }

  dataInfoMusician() {
    return {
      "MusicianName": this.musicianName,
      "MusicianInfo": this.musicianInfo,
      "MusicianInstrument": this.musicianInstrument,
      "MusicianBand": this.musicianBand     
    };
  }

}