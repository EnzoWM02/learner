import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";

const JavascriptConditionals = {
  id: "js-conditionals",
  coins: 15,
  experience: 120,
  title: "Condicionais",
  new: true,
  description:
    "Condicionais em JavaScript permitem executar blocos de código com base em condições. As estruturas mais comuns são `if`, `else if` e `else`.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual operador de comparação verifica se dois valores são iguais em valor e tipo?",
    options: [
      { title: "==", correct: false },
      { title: "===", correct: true },
      { title: "!=", correct: false },
      { title: ">=", correct: false },
    ],
  },
};

export default JavascriptConditionals;
