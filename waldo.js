

function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
    if (element === "Waldo"){
      found(i);
    }
  });
}


function actionWhenFound(x) {

  console.log("Found Waldo at index " + x + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

