import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptArrayMethods = {
  id: "js-array-methods",
  coins: 15,
  experience: 150,
  title: "Métodos de Array",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "JavaScript oferece vários métodos de array que facilitam a manipulação de listas, como `map`, `filter` e `reduce`, cada um com propósitos específicos.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual método de array cria um novo array com todos os elementos que passam em um teste?",
    options: [
      { title: "filter", correct: true },
      { title: "map", correct: false },
      { title: "reduce", correct: false },
      { title: "forEach", correct: false },
    ],
  },
};

export default JavascriptArrayMethods;
