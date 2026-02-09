const input = document.getElementById("q");
const clearBtn = document.getElementById("clear");
const list = document.getElementById("items");
const count = document.getElementById("count");

const items = Array.from(list.querySelectorAll("li")).map(li => ({
  el: li,
  text: li.textContent.normalize("NFKC").toLowerCase()
}));

function update() {
  const q = input.value.normalize("NFKC").trim().toLowerCase();
  let shown = 0;

  for (const item of items) {
    const match = q === "" || item.text.includes(q);
    item.el.hidden = !match;
    if (match) shown++;
  }

  count.textContent = `表示：${shown} / ${items.length}`;
}

input.addEventListener("input", update);

clearBtn.addEventListener("click", () => {
  input.value = "";
  input.focus();
  update();
});

update();
