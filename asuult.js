const all = document.getElementById("buh-asuult");
const randomQuestionCont = document.getElementById("Random-asuult");
const mongol = document.getElementById("mongol");
const code = document.getElementById("code");
const delhii = document.getElementById("delhii");

const showAll = async () => {
  randomQuestionCont.classList.value = "hidden";
  all.classList.value = "block";

  const response = await fetch(
    "https://menu-api.parent-content-parent-content-service.workers.dev/quiz",
  );

  const allQuestion = await response.json();

  allQuestion.forEach((asuult) => {
    const box = document.createElement("div");
    const answerContainer = document.createElement("div");
    const text = document.createElement("span");
    const zuraas = document.createElement("div");

    box.className = "flex gap-1 mb-5 flex-col w-150 h-17 px-4";
    answerContainer.className = "flex gap-3";
    zuraas.className = "border-1 w-full";
    if (mongol.checked) {
      if (asuult.category === "mongol") {
        text.textContent = `${asuult.id}. ${asuult.question}`;

        asuult.options.forEach((n) => {
          const option = document.createElement("button");

          option.textContent = n;
          option.className = "border-1 rounded-[5px] px-3";

          option.onclick = () => {
            const buttons = answerContainer.querySelectorAll("button");

            buttons.forEach((button) => {
              button.disabled = true;
            });

            mdq(asuult.answer, n, option);
          };
          answerContainer.append(option);
        });

        box.append(text, answerContainer);
        all.appendChild(box);
      }
    }
    if (delhii.checked) {
      if (asuult.category === "delhii") {
        text.textContent = `${asuult.id}. ${asuult.question}`;

        asuult.options.forEach((n) => {
          const option = document.createElement("button");

          option.textContent = n;
          option.className = "border-1 rounded-[5px] px-3";

          option.onclick = () => {
            const buttons = answerContainer.querySelectorAll("button");

            buttons.forEach((button) => {
              button.disabled = true;
            });

            mdq(asuult.answer, n, option);
          };
          answerContainer.append(option);
        });

        box.append(text, answerContainer);
        all.appendChild(box);
      }
    }
    if (code.checked) {
      if (asuult.category === "kod") {
        text.textContent = `${asuult.id}. ${asuult.question}`;

        asuult.options.forEach((n) => {
          const option = document.createElement("button");

          option.textContent = n;
          option.className = "border-1 rounded-[5px] px-3";

          option.onclick = () => {
            const buttons = answerContainer.querySelectorAll("button");

            buttons.forEach((button) => {
              button.disabled = true;
            });

            mdq(asuult.answer, n, option);
          };
          answerContainer.append(option);
        });

        box.append(text, answerContainer);
        all.appendChild(box);
      }
    }
    if (!mongol.checked && !delhii.checked && !code.checked) {
      text.textContent = `${asuult.id}. ${asuult.question}`;

      asuult.options.forEach((n) => {
        const option = document.createElement("button");

        option.textContent = n;
        option.className = "border-1 rounded-[5px] px-3";

        option.onclick = () => {
          const buttons = answerContainer.querySelectorAll("button");

          buttons.forEach((button) => {
            button.disabled = true;
          });

          mdq(asuult.answer, n, option);
        };
        answerContainer.append(option);
      });

      box.append(text, answerContainer);
      all.appendChild(box);
    }
  });
};

function mdq(answer, text, btn) {
  if (answer === text) {
    btn.className = "bg-green-600 text-white rounded-[5px] px-3";
  } else {
    btn.className = "bg-red-600 text-white rounded-[5px] px-3";
  }
}

const random = async () => {
  randomQuestionCont.classList.value = "flex";
  all.classList.value = "hidden";
  const randomArr = [];
  const response = await fetch(
    "https://menu-api.parent-content-parent-content-service.workers.dev/quiz/random",
  );
  const randomQuestion = await response.json();
  const box = document.createElement("div");
  box.className = "flex gap-3 flex-col w-150 h-17 px-4";
  const text = document.createElement("span");
  const answerContainer = document.createElement("div");

  answerContainer.className = "flex gap-3";

  randomQuestion.options.forEach((n) => {
    const option = document.createElement("button");

    option.textContent = n;
    option.className = "border-1 rounded-[5px] px-3";

    option.onclick = () => {
      const buttons = answerContainer.querySelectorAll("button");

      buttons.forEach((button) => {
        button.disabled = true;
      });

      mdq(randomQuestion.answer, n, option);
    };

    answerContainer.append(option);
  });

  randomArr.push(randomQuestion.question);
  box.append(randomArr, answerContainer);
  randomQuestionCont.appendChild(box);
};
