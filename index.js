// let inp1 = Number(document.getElementById("inp1").value);
// let inp2 = Number(document.getElementById("inp2").value);
// let inp3 = (document.getElementById("inp3").value=inp1+inp2);

// !Addition
let add = document.getElementById('add');
add.onclick = function () {
    let inp1 = Number(document.getElementById("inp1").value);
    let inp2 = Number(document.getElementById("inp2").value);
    let inp3 = document.getElementById("inp3").value = inp1 + inp2;
    // inp3.value = inp1 + inp2;
    console.log(inp1 + inp2);
}

// !subtraction
let sub = document.getElementById("sub");
sub.onclick = function () {
  let inp1 = Number(document.getElementById("inp1").value);
  let inp2 = Number(document.getElementById("inp2").value);
  let inp3 = (document.getElementById("inp3").value = inp1 - inp2);
  // inp3.value = inp1 + inp2;
  console.log(inp1 - inp2);
};

// !multilacation:
let mul = document.getElementById("mul");
mul.onclick = function () {
  let inp1 = Number(document.getElementById("inp1").value);
  let inp2 = Number(document.getElementById("inp2").value);
  let inp3 = (document.getElementById("inp3").value = inp1 * inp2);
  // inp3.value = inp1 + inp2;
  console.log(inp1 * inp2);
};

// !division:
let div = document.getElementById("div");
div.onclick = function () {
  let inp1 = Number(document.getElementById("inp1").value);
  let inp2 = Number(document.getElementById("inp2").value);
  let inp3 = (document.getElementById("inp3").value = inp1 / inp2);
  // inp3.value = inp1 + inp2;
  console.log(inp1 / inp2);
};