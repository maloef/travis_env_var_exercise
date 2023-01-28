
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const FAVORITE_FOOD = prcess.env.FAVORITE_FOOD
  while(true) {
    console.log("My favorite food: ", FAVORITE_FOOD);
    await sleep(5000);
  }
}

main();
