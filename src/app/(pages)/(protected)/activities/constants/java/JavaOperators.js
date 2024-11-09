import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaOperators = {
  id: "java-operators",
  coins: 10,
  experience: 100,
  title: "Operadores",
  difficulty: Difficulties.EASY,
  new: true,
  description:
    "Java possui operadores para realizar operações matemáticas, comparações e operações lógicas.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual operador é utilizado para concatenar duas `String` em Java?",
    options: [
        { title: "&", correct: false },
        { title: "*", correct: false },
        { title: "-", correct: false },
        { title: "+", correct: true },
    ],
  },
};

export default JavaOperators;
