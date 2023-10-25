export default class Band {
  bandInfo;
  bandName;  
  bandAge;
  bandBirth;
  bandMusicians = [];
  bandRetire;
  formerMembers = [];


  constructor(bandName, bandInfo, bandBirth, bandRetire, bandMusicians = [], formerMembers = [], bandAge) {
    
    this.bandName = bandName;
    this.bandInfo = bandInfo;
    this.bandBirth = bandBirth;
    this.bandRetire = bandRetire;
    this.bandMusicians = bandMusicians;    
    this.formerMembers = formerMembers;
    this.bandAge = bandAge;
  }  

  dataInfoBand() {
    
    return {
      "Bandname": this.bandName,
      "BandInfo": this.bandInfo,            
      "BandBirth": this.bandBirth,
      "BandRetire": this.bandRetire,
      "BandMusicians": this.bandMusicians,      
    };
  }
}

