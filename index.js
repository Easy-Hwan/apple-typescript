class Person {
    constructor() {
        this.getBmi = () => this.myWeight / Math.pow((this.myHeight / 100), 2);
        this.myName = "jihwan";
        this.myLastName = "lee";
        this.myHeight = 180;
        this.myWeight = 75;
    }
}
let jihwan = new Person();
// jihwan.myName = 1004 // type error
console.log(jihwan.getBmi()); // => 23.148
