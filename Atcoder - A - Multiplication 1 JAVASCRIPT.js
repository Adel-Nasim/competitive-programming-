const main = (args) => {
    const input = args.trim().split("\n");
    const x = Number(input[0].split(" ")[0]);
    const y = Number(input[0].split(" ")[1]);
   
    console.log(x * y);
  };
   
  main(require("fs").readFileSync("/dev/stdin", "utf8"));