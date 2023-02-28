//一、类型
//类型声明

let a: number;
a = 8;
let b: string;
let c: boolean;

//字面量
let d: 10;
let e: "male" | "female";
let f: number | string;

//any
let g: any;
//不指定类型，自动为any
let h;

//unknown vs any: unknown不可以赋值到其他变量/any可以赋值到其他变量

//类型断言
let i;
i = b as string;
i = <string>b;

function fn(): void | number {

}

//void vs never :never 永远不会有返回结果
function never(): never {
  throw new Error("never");
}

//指定对象 及其属性
//? 表示可选的
let l: object;//没有意义 期望规定object里的属性名
let j: { name: string, code?: number };
//表示必须有name属性，其他属性随意
let k: { name: string, [anyField: string]: any };

//指定函数
let m: Function;//没有意义，写成箭头函数指定结构
let n: (a: string, b: boolean) => number;
n = function (a, b): number {
  return 1234;
}

//指定数组
let o: string[];//字符串数组
let p: Array<number>;//数值数组

//指定元组：固定长度的数组
let q: [string, number];

//枚举
enum Gender {
  male,
  female
}

let r: { name: string, gender: Gender };
r = {
  name: "我",
  gender: Gender.female //用枚举类：自动编译成0 / 1
}

//二、类型间关系
let s: { name: string } & { age: number };//todo 表示对象必须有这两个属性 ？？为什么用&表示 不用obj声明

//三、类型别名 type
type example = number | string | boolean;
let t:example;

let u ='gg';

let w="hh";
