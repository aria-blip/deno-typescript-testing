import rand from "npm:random-name";

export function add(a: number, b: number): number {
  return a * b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
let mycar ="honda";
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
  console.log(add(Number(Deno.args[0]) ,Number(Deno.args[1])));
  console.log(rand.first());
  console.log(sword1);
  console.log(gettheText(sword1));

}
