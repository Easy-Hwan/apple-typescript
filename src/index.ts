class Person {
  myName: string;
  myLastName: string;
  myHeight: number;
  myWeight: number;
  myBmi: number;
  constructor() {
    this.myName = "jihwan";
    this.myLastName = "lee";
    this.myHeight = 180;
    this.myWeight = 75;
  }
  getBmi = (): number =>
    (this.myBmi = this.myWeight / (this.myHeight / 100) ** 2);
  printBmi = (): void => console.log(`My bmi : ${this.myBmi}`);
}

let jihwan = new Person();
jihwan.getBmi();
jihwan.printBmi();
