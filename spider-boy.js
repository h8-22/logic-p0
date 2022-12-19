let route = "22347";

if (route.length < 3) {
  console.log(`Minimum character 3`);
} else if (route.length > 14) {
  console.log(`Maximum Character 14`);
} else {
  for (let i = 0; i < route.length; i++) {
    let temp = "|";
    for (let j = 1; j < route.length; j++) {
      if (j === Number(route[i])) {
        temp += "o";
      } else {
        temp += "#";
      }
    }
    if (route[i] === "7") {
      console.log(`Maximum route value is 6`);
    } else {
      temp += "|";
      console.log(temp);
    }
  }
}
