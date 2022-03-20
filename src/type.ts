// The primitives : 기본 타입

// Any : dynamicType 모든타입 허용, 타입에 제한이 없음.
const typeAny: any = "any" + 1;
// unknown : 아직 선언하지 않음, 값 할당시 타입이 고정됨.
const typeUnknown: unknown = "unknown" + 1;
// String
const typeString: string = "문자열";
// Int && Double && float
const typeNumber: number = 1;
// Boolean
const typeBool: boolean = false;

// The array : 배열타입
// Array<T>
const typeArr: Array<number> = [1, 2, 3];
// Array : type[]
const typeArr2: number[] = [1, 2, 3];

// The object : 오브젝트 타입

// Object{ keyName: valueType } :
const obj: { key: string } = { key: "value" };
// ? : null 허용
const obj2: { key?: string } = {};

// Union Types : 변수 하나가 두개의 타입을 가질 수 있다.

// Primitives : 기본 유니온
let typeUnion: string | number;
typeUnion = 1;
typeUnion = "string";

// Array : 배열 유니온
const typeUnionArr: Array<number | string> = [1, "string"];
const typeUnionArr2: (number | string)[] = [2, "string2"];

// Object:  오브젝트 유니온
let typeUnionObj: { key: string | number } = { key: 1 };
typeUnionObj = { key: "string" };

// Type type : 타입을 미리 선언하여 사용할 수 있다.
type myType = { key: boolean };
const myVar: myType = { key: true };

// Enum type :
enum gender {
  male,
  female,
}
enum enumNumber {
  one = 1,
  two = 2,
}

let enumObj: { gender: gender; number: enumNumber };
enumObj = { gender: gender.male, number: enumNumber.two };
// => { gender : male, number : 2 }
