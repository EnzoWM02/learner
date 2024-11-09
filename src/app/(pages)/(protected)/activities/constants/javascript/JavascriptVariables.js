import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptVariables = {
  id: "js-variables",
  coins: 10,
  experience: 100,
  title: "Variáveis",
  difficulty: Difficulties.EASY,
  description:
    "Variáveis em JavaScript são utilizadas para armazenar dados que podem ser acessados e manipulados ao longo do programa. Elas são declaradas com `var`, `let` ou `const`.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual é a palavra-chave para declarar uma variável que não pode ser reatribuída?",
    options: [
      { title: "let", correct: false },
      { title: "var", correct: false },
      { title: "function", correct: false },
      { title: "const", correct: true },
    ],
  },
};

export default JavascriptVariables;
