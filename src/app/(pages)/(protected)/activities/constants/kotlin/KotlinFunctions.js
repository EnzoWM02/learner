import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const KotlinFunctions = {
  id: "kotlin-functions",
  coins: 15,
  experience: 150,
  title: "Funções",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "Funções em Kotlin são blocos de código que executam tarefas específicas e podem receber parâmetros e retornar valores.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual palavra-chave é usada para definir uma função em Kotlin?",
    options: [
      { title: "def", correct: false },
      { title: "fun", correct: true },
      { title: "function", correct: false },
      { title: "method", correct: false },
    ],
  },
};

export default KotlinFunctions;
