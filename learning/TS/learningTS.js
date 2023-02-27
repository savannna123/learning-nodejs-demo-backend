//一、类型
//类型声明
var a;
a = 8;
var b;
var c;
//字面量
var d;
var e;
var f;
//any
var g;
//不指定类型，自动为any
var h;
//unknown vs any: unknown不可以赋值到其他变量/any可以赋值到其他变量
//类型断言
var i;
i = b;
i = b;
function fn() {
}
//void vs never :never 永远不会有返回结果
function never() {
    throw new Error("never");
}
//指定对象 及其属性
//? 表示可选的
var l; //没有意义 期望规定object里的属性名
var j;
//表示必须有name属性，其他属性随意
var k;
//指定函数
var m; //没有意义，写成箭头函数指定结构
var n;
n = function (a, b) {
    return 1234;
};
//指定数组
var o; //字符串数组
var p; //数值数组
//指定元组：固定长度的数组
var q;
//枚举
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var r;
r = {
    name: "我",
    gender: Gender.female //用枚举类：自动编译成0 / 1
};
//二、类型间关系
var s; //表示对象必须有这两个属性 ？？为什么用&表示 不用obj声明
var t;
var u = 'gg';
var w = "hh";
