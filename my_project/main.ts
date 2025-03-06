import { rand } from "npm:random-name";
import { greet } from "./myfunctions.ts";
export function add(a: number, b: number): number {
  return a + b;
}
async function clear_file() { 
  await Deno.writeTextFile("text.txt", "CONTENT : \n");
  console.log("%c File cleared","color: green");
}

try {

  clear_file(); 

  
  for (let i = 0; i < 10; i++) {
    var resp = await fetch("https://api.chucknorris.io/jokes/random", {method: "GET"});

    var response=await resp.json().then((data) => JSON.stringify(data));

    await Deno.writeTextFile("text.txt", JSON.parse(response).value +"\n", {append: true});

  }
} catch (e) {
  console.log(e);
}



