import rand from "npm:random-name";

export function add(a: number, b: number): number {
  return a * b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
let mycar ="honda";
let funnyquote = { asd: "asd", asd2: "asd2" };

class Phone {
  #asas : string = "asas";
  myvar: string = "myvar";

  constructor(public name: string, public price: number) {
      this.name = name;
      this.price = price;
  }

  static phoneques: string = "u knoq exacly what a phone is?";

  get namee(){
      return this.name +"jhjj";
  }

  getTheName() {
      return this.name;
  }

}

Phone.prototype.chip ="snapdragon";
Phone.prototype.ismyphonecheap = () => {return "yes"};
let phone = new Phone("Samsung", 300);

console.log(Phone.phoneques);

console.log(phone.myvar);

interface SalesPerson{
  name: string;
  age: number;
}
interface DealerShip {
  car1: string;
  car3: string;
  car4: string;
  salesperson:SalesPerson;
}
interface TextBubble{
  text: string;
}
function gettheText(dealership:DealerShip):TextBubble{
  let theagetext: string;
  switch(dealership.salesperson.age){
    case  20:
      theagetext = "jut turneed 20";
      break;
    case  30:
      theagetext = "just turned 30";
      break;
    case  40:
      theagetext = "old";
      break;
    default:
      theagetext = "his age is "+ dealership.salesperson.age;
  }
  return {text: "The first car is " + dealership.car1 + " and the salesperson is " + dealership.salesperson.name + "and " + theagetext};
}

function ismycarwallet(carname:string):string{
  if(carname=="honda" ) return "cheap"; else return "expensive"

}

const sword1: DealerShip = {car1: "honda", car3:ismycarwallet(mycar), car4: "toyota", salesperson:{name:"john", age: 40}};



if (import.meta.main) {
  console.log("Add e2 + 3 =", add(2, 3));
  for (let i = 0; i < 5; i++) {
    console.log(rand.first());
  }
  var counter=1;
  firstlabel:while(counter<10){
    console.log("counter is " + counter);
    counter++;
    console.log("counter is " + counter);
    while(counter<3){
        break firstlabel;
    }
  }
   
  var firstfun= function(a:number ,b:number[]){
    console.log(b.map((x)=>a*x)  );   
  }
  firstfun(2,[1,2,3]);



  console.log(add(Number(Deno.args[0]) ,Number(Deno.args[1])));
  console.log(rand.first());
  console.log(sword1);
  console.log(gettheText(sword1));

}
