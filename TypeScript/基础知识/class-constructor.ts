// 类的构造函数
class A{
    b: string;
    constructor(c:string){
        this.b = c
    }
}
const d = new A('x')
console.log(d.b)


// 当 b 和 c 相同时，即
class A{
    b: string;
    constructor(b:string){
        this.b = b
    }
}
const c = new A('x')
console.log(c.b)

//可以简化成下面这种形式
class A{
    constructor(public b: string){
        this.b = b
    }
}
const c = new A('x')
console.log(c.b)