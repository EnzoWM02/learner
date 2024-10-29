import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";

const JavascriptVariables = {
  id: "js-variables",
  coins: 10,
  experience: 100,
  title: "Variáveis",
  new: true,
  description:
    "Variáveis em JavaScript são utilizadas para armazenar dados que podem ser acessados e manipulados ao longo do programa. Elas são declaradas com `var`, `let` ou `const`.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual é a palavra-chave para declarar uma variável que não pode ser reatribuída?",
    options: [
      { title: "const", correct: true },
      { title: "let", correct: false },
      { title: "var", correct: false },
      { title: "function", correct: false },
    ],
  },
};

export default JavascriptVariables;