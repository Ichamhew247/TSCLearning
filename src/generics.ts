function getFirstElememt<ElementType>(array: ElementType[]) {
  return array[1];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElememt<number>(numbers);
console.log(firstNum); // 1

const strings = ["sdf", "sdr"];
const firstString = getFirstElememt(strings);
console.log(firstString); // "sdf"

//We use genetic type from beginning
//Example1
const input = document.querySelector<HTMLInputElement>(".input");

input?.value;

//Example2
const a = [1, 2, 3];

a.map(() => {}); //<void>
a.map(() => {
  return "return string";
}); //<string>

//Example3
const map1 = new Map<string, number>();
map1.set("sfg", 6);
console.log(map1);

//Example3.1
const map1_1 = new Map<string, number>([["try0", 0]]);
map1_1.set("try1", 1);
console.log(map1_1);
//Example4 Directly Set Array in Parameter.
const map2 = new Map([["try2", 2]]);
map2.set("try3", 3);
console.log(map2);

//Example of Map.set
const myMap = new Map();

// Set key-value
myMap.set("name", "John");
myMap.set("age", 25);

// Set key-value
myMap.set("age", 26);

// Check Value
console.log(myMap.get("name")); // show "John"
console.log(myMap.get("age")); // show 26

//Example of specific type (Not ideal type)
type ApiResponse = {
  data: any;
  isError: boolean;
};

const response: ApiResponse = {
  data: {
    name: "kyle",
    age: 28,
  },
  isError: false,
};

//Example of generic type (ideal type)
type ApiResponse1<Data> = {
  data: Data;
  isError: boolean;
};

const response1: ApiResponse1<{ name: string; age: number }> = {
  data: {
    name: "kyle",
    age: 28,
  },
  isError: false,
};

//Example of generic type (Easy read version)
type ApiResponse2<Data> = {
  data: Data;
  isError: boolean;
};
type UserResponse = ApiResponse2<{ name: string; age: number }>;
type BlogResponse = ApiResponse2<{ title: string }>;

const response2: UserResponse = {
  data: {
    name: "kyle",
    age: 28,
  },
  isError: false,
};
const response3: BlogResponse = {
  data: {
    title: "kyle",
  },
  isError: false,
};

//Example of generic type (Directly)
type ApiResponse3<Data = { status: number }> = {
  data: Data;
  isError: boolean;
};

const response4: ApiResponse3 = {
  data: {
    status: 200,
  },
  isError: true,
};

//extends object rarely use, so don't worry about it
//Example of extends object
type ApiResponse4<Data extends object> = {
  data: Data;
  isError: boolean;
};

const response5: ApiResponse4<{ name: string }> = {
  data: {
    name: "200",
  },
  isError: true,
};
//Example of extends object with default value
type ApiResponse5<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

const response6: ApiResponse5 = {
  data: {
    status: 200,
  },
  isError: true,
};

//We usually use this not extend, TSC smart enough to know type
type ApiResponse6<Data> = {
  data: Data;
  isError: boolean;
};

const response7: ApiResponse6<{ status: number }> = {
  data: {
    status: 200,
  },
  isError: true,
};
