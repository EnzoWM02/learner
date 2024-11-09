import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaStrings = {
  id: "java-strings",
  coins: 10,
  experience: 100,
  title: "Manipulação de Strings",
  difficulty: Difficulties.EASY,
  new: true,
  description:
    "Strings em Java representam sequências de caracteres e são usadas para armazenar e manipular texto.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual método é utilizado para obter o tamanho de uma `String` em Java?",
    options: [
      { title: "size()", correct: false },
      { title: "length()", correct: true },
      { title: "getLength()", correct: false },
      { title: "count()", correct: false },
    ],
  },
};

export default JavaStrings;
