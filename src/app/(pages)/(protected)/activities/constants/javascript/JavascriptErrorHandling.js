import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptErrorHandling = {
  id: "js-error-handling",
  coins: 15,
  experience: 150,
  title: "Tratamento de Erros",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "O tratamento de erros em JavaScript é feito com blocos `try-catch`, permitindo capturar e lidar com exceções para que o código continue funcionando.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual palavra-chave é usada para capturar um erro em JavaScript?",
    options: [
      { title: "try", correct: false },
      { title: "catch", correct: true },
      { title: "throw", correct: false },
      { title: "finally", correct: false },
    ],
  },
};

export default JavascriptErrorHandling;
