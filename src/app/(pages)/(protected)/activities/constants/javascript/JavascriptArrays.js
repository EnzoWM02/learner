import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";

const JavascriptArrays = {
  id: "js-arrays",
  coins: 25,
  experience: 200,
  title: "Arrays",
  new: true,
  description:
    "Arrays em JavaScript são usados para armazenar múltiplos valores em uma única variável, permitindo acesso e manipulação com diversos métodos.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual método adiciona um elemento ao final de um array?",
    options: [
      { title: "push", correct: true },
      { title: "pop", correct: false },
      { title: "shift", correct: false },
      { title: "unshift", correct: false },
    ],
  },
};

export default JavascriptArrays;