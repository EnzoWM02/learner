import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptDataTypes = {
  id: "js-data-types",
  coins: 10,
  experience: 100,
  title: "Tipos de Dados",
  difficulty: Difficulties.EASY,
  new: true,
  description:
    "JavaScript possui vários tipos de dados, como `string`, `number`, `boolean`, entre outros, que permitem estruturar as informações no programa.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual tipo de dado é utilizado para armazenar texto em JavaScript?",
    options: [
      { title: "number", correct: false },
      { title: "string", correct: true },
      { title: "boolean", correct: false },
      { title: "object", correct: false },
    ],
  },
};

export default JavascriptDataTypes;
