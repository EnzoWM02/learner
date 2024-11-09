import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptAsyncAwait = {
  id: "js-async-await",
  coins: 20,
  experience: 180,
  title: "Async/Await",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "O `async/await` simplifica o trabalho com operações assíncronas, tornando o código mais legível e permitindo o uso de `try-catch` para tratamento de erros.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual palavra-chave define uma função assíncrona em JavaScript?",
    options: [
      { title: "await", correct: false },
      { title: "setTimeout", correct: false },
      { title: "async", correct: true },
      { title: "promise", correct: false },
    ],
  },
};

export default JavascriptAsyncAwait;
