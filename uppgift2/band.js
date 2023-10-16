export default class Band 
{
  bandName;
  bandBirth;
  bandAge;
  bandMusicians;
  bandHistory;
  formerMembers;

  constructor(bandName, bandBirth, bandAge, bandMusicians, bandHistory, formerMembers) {
    this.bandName = bandName;
    this.bandBirth = bandBirth;
    this.bandAge = bandAge;
    this.bandMusicians = bandMusicians;
    this.bandHistory = bandHistory;
    this.formerMembers = formerMembers;
  }

  get bandName()
  {
    return this.bandName;
  }

  get bandBirth()
  {
    return this.bandBirth;
  }

  get bandAge()
  {
    return this.bandAge;
  }

  get bandMusicians()
  {
    return this.bandMusicians;
  }

  get bandHistory()
  {
    return this.bandHistory;
  }

  get formerMembers()
  {
    return this.formerMembers;
  }
}