class Movie {
    constructor(title,studio,rating="PG"){
       this.title = title;   //key: value  // leo = title
       this.studio = studio;
       this.rating = rating;
    }
  }

   const obj = new Movie("leo","7-Screen Studio","7.2");
   const obj1 = new Movie("vikram","RKFI","8.5")
   console.log("TASK 1 a) Part");
   console.log(obj.title,obj.studio,obj.rating);
   console.log(obj1.title,obj1.studio,obj1.rating);
   console.log("  ");
   
   
   console.log("TASK 1 b) Part");
console.log("**********Give the parameter Without Rating************");

const obj2 = new Movie("Ayan","AVM Production")
console.log(obj2.title,obj2.studio,obj2.rating);

console.log("  ");
console.log("TASK 1 c) Part");
console.log("**********to print movie if the rating = PG************");
const list = [
    new Movie("Kaithi","7screen","PG"),
    new Movie("3","scs","5.5"),
    new Movie("kgf","homele","PG"),
    new Movie("kgf2","7screen","PG"),
    new Movie("salar","homele","4.5")

]
const res = list.filter((ele)=>ele.rating==="PG")
console.log(res);







console.log("  ");
console.log("TASK 1 d) Part");
const obj3 = new Movie("Casino Royale","Eon Productions","PG­13")
console.log(obj3.title,obj3.studio,obj3.rating);

console.log(" ");
console.log("Task 2");

class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
    get Radius(){
        return this.radius

    }
    set Radius(n){
        this.radius=n
    }
    get Color(){
        return this.color

    }
    set Color(n){
        this.color=n
    }
    get toString(){
       
        return `"Circle[radius= ${this.radius}, color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get curcumference(){
        return 2*Math.PI*this.radius
    }

}
const Circle = new circle(1.0,"green")
console.log(Circle.Radius)
console.log(Circle.Color)
console.log(Circle.toString)
console.log(Circle.area)
console.log(Circle.curcumference)



console.log(" ");
console.log("Task 3");
class Person{
    constructor(name,age,gender,martialstatus,contact,email){
        this.name = name;
        this.age = age;
        this.gender= gender;
        this.martialstatus = martialstatus;
        this.contact= contact
        this.email=email

    }

}
const detail = new Person("Deepakmuthu",20,"Male","Single","9566752004","deepakmuthu21@gmail.com")

console.log(`${detail.name}, 
${detail.age},
${detail.gender},
${detail.martialstatus},
${detail.contact},
${detail.email}`);






console.log(" ");
console.log("Task 4");

class uber{
    constructor(ActualKM,PricePerKM = 25){
        this.ActualKM=ActualKM
    
        this.PricePerKM=PricePerKM
    }   
    set KiloMeter(n){
        this.PricePerKM=n
    }
    get Price(){
        return  this.PricePerKM*this.ActualKM
    }
}
const calculate = new uber(50)
console.log(`your distance is ${calculate.ActualKM} Kilometer And Charge of the uber is  ${calculate.Price}`);

