import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptFunctions = {
  id: "js-functions",
  coins: 15,
  experience: 150,
  title: "Funções",
  difficulty: Difficulties.MEDIUM,
  description:
    "Funções em JavaScript são blocos de código que executam tarefas específicas e podem ser reutilizadas em diversas partes do código.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual das opções cria uma função chamada `soma`?",
    options: [
      { title: "`soma() => {}`", correct: false },
      { title: "`let soma = function`", correct: false },
      { title: "`const soma() => {}`", correct: false },
      { title: "`function soma() {}`", correct: true },
    ],
  },
};

export default JavascriptFunctions;
