class Person {
  myName: string;
  myLastName: string;
  myHeight: number;
  myWeight: number;
  constructor() {
    this.myName = "jihwan";
    this.myLastName = "lee";
    this.myHeight = 180;
    this.myWeight = 75;
  }
  getBmi = (): number => this.myWeight / (this.myHeight / 100) ** 2;
}

let jihwan = new Person();
// jihwan.myName = 1004 // type error
console.log(jihwan.getBmi()); // => 23.148
