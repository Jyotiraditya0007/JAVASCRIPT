function changeText() {
  document.getElementById("title").textContent = "Hello DOM";
}

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("box").style.background = "yellow";
});

document.getElementById("show").addEventListener("click", function() {
  let value = document.getElementById("name").value;
  document.getElementById("result").textContent = value;
});

document.getElementById("add").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
});

document.getElementById("removeBtn").addEventListener("click", function() {
  let element = document.getElementById("removeMe");
  element.remove();
});

let count = 0;

document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});
