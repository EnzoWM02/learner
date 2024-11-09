import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptClosures = {
  id: "js-closures",
  coins: 40,
  experience: 400,
  title: "Closures",
  difficulty: Difficulties.HARD,
  new: true,
  description:
    "Closures em JavaScript ocorrem quando uma função 'lembra' seu escopo léxico mesmo após o término da execução. Isso permite a criação de funções privadas e controle de variáveis fora do escopo global.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual é a principal característica de uma closure em JavaScript?",
    options: [
      {
        title: "Permite que uma função altere o escopo global",
        correct: false,
      },
      {
        title: "Permite que uma função seja chamada apenas uma vez",
        correct: false,
      },
      {
        title: "Permite que uma função ignore variáveis de escopo de bloco",
        correct: false,
      },
      {
        title: "Permite que uma função acesse seu escopo léxico",
        correct: true,
      },
    ],
  },
};

export default JavascriptClosures;
