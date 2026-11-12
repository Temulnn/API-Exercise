const box = document.getElementById("box");
const showFoodByName = async (type) => {
  const response = await fetch(
    `https://menu-api.parent-content-parent-content-service.workers.dev/foods?type=${type}`,
  );
  const food = await response.json();
  food.forEach((food, i) => {
    if (box.length === undefined) {
      const list = document.createElement("div");
      list.className =
        "h-50 w-30 flex flex-col border-1 rounded-[5px] gap-3 justify-center items-center";
      const name = document.createElement("span");
      const price = document.createElement("span");
      const img = document.createElement("img");
      img.src = food.image;
      img.className = "h-32 w-full rounded-[5px]";
      name.textContent = food.title;
      price.textContent = food.price;
      list.append(img, name, price);

      box.appendChild(list);
    }
  });
};
const seachFood = document.getElementById("seachFood");
const searchFoodBtn = async () => {
  const response = await fetch(
    `https://menu-api.parent-content-parent-content-service.workers.dev/foods?type=${seachFood.value}`,
  );
  const food = await response.json();
  if (food.length === 0) {
    console.log(`oldsongui`);
  } else {
    food.forEach((food, i) => {
      const list = document.createElement("div");
      list.className =
        "h-50 w-30 flex flex-col border-1 rounded-[5px] gap-3 justify-center items-center";
      const name = document.createElement("span");
      const price = document.createElement("span");
      const img = document.createElement("img");
      img.src = food.image;
      img.className = "h-32 w-full rounded-[5px]";
      name.textContent = food.title;
      price.textContent = food.price;
      list.append(img, name, price);

      box.appendChild(list);
    });
  }
};
