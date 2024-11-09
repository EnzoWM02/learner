import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaConditionals = {
  id: "java-conditionals",
  coins: 15,
  experience: 120,
  title: "Condicionais",
  difficulty: Difficulties.MEDIUM,
  description:
    "Condicionais em Java permitem que o código tome decisões com base em condições específicas. As principais estruturas são `if`, `else if` e `else`.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual operador de comparação verifica se dois valores são iguais em Java?",
    options: [
      { title: "!=", correct: false },
      { title: "=", correct: false },
      { title: "==", correct: true },
      { title: "&&", correct: false },
    ],
  },
};

export default JavaConditionals;
