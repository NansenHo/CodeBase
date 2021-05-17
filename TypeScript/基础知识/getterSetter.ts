class A{
    constructor(private _a: number){}
    get a(){
        return this._a - 10
    }
    set a(a: number){
        this._a = a + 15
    }
}
const A1 = new A(0)
A1.a = 15 // setter
console.log(A1.a) // getter
// 我们可以通过 getter&setter 方法从类的外部访问到私有属性