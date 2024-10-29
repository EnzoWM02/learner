import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";

const JavascriptFunctions = {
  id: "js-functions",
  coins: 15,
  experience: 150,
  title: "Funções",
  new: true,
  description:
    "Funções em JavaScript são blocos de código que executam tarefas específicas e podem ser reutilizadas em diversas partes do código.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual das opções cria uma função chamada `soma`?",
    options: [
      { title: "`function soma() {}`", correct: true },
      { title: "`soma() => {}`", correct: false },
      { title: "`let soma = function`", correct: false },
      { title: "`const soma() => {}`", correct: false },
    ],
  },
};

export default JavascriptFunctions;
