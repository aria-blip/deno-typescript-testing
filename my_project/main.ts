import { rand } from "npm:random-name";
import { greet } from "./myfunctions.ts";
import { createCanvas,loadImage } from "https://deno.land/x/canvas/mod.ts";
import { getImageInfo } from "jsr:@retraigo/image-size";

export function add(a: number, b: number): number {
  return a + b;
}
async function clear_file() { 
  await Deno.writeTextFile("text.txt", "CONTENT : \n");
  console.log("%c File cleared","color: green");    
  var response=await resp.json().then((data) => JSON.stringify(data));

  let responsee = JSON.parse(response).value;
 console.log(responsee);
 
  await Deno.writeTextFile("text.txt", JSON.parse(response).value +"\n", {append: true});

}
async function draw_on_image(title: string,listofpixel:number[][]) {


  const imgData = getImageInfo(Deno.readFileSync("./"+title));

  imgData.height=  Math.round(imgData.height / 10) * 10;
  imgData.height=  Math.round(imgData.height / 10) * 10;

  const canvas = createCanvas(imgData.width, imgData.height);
  
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  const image = await loadImage("./"+title);
  var fithheight = imgData.height/listofpixel.length;
  var fithwidth = imgData.width/listofpixel[0].length;
  ctx.drawImage(image, 0, 0);
  for (let i = 0; i < listofpixel.length; i++) {
    for (let j = 0; j < listofpixel[i].length; j++) {
      if (listofpixel[i][j] === 1) {

        ctx.fillRect((j)*fithheight,(i)*fithwidth , fithwidth, fithheight);
      }
    }
  }

  const buf = canvas.toBuffer();
  await Deno.writeFile(title, buf);
}

function getSkeletInfo(title:string): number[][] {
  const imgData = getImageInfo(Deno.readFileSync("./"+title));

  var height=  imgData.height/5 
  var width= imgData.width /5
  console.log("height : "+height);
  console.log("width : "+width);
  height=  Math.round(height / 10) * 10;
  width=Math.round(width / 10) * 10

  var list :number [][]=[];

  height = height / 10;
  width = width / 10;
  for (let i = 0; i < height; i++) {
    list.push([]);
    
    for (let j = 0; j < width; j++) {
      list[i].push(0);
    }
    var theconsole="";
    for (let j = 0; j < width; j++) {
      theconsole+="[0],"
    }
    console.log(theconsole);
  }
  return list;
}

try {
  
  var resp = await fetch("https://upload.wikimedia.org/wikipedia/commons/5/5b/Distancedisplacement.png", {method: "GET"});
  console.log(resp.body);

  if (resp.body) {
   const file = await Deno.open("./logo.png", { write: true, create: true });
   await resp.body.pipeTo(file.writable) 
   getSkeletInfo("logo.png");

  // await draw_on_image("logo.png");
   

  }

  
} catch (e) {
  console.log("e");
}



