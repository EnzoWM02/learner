import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaDataTypes = {
  id: "java-data-types",
  coins: 10,
  experience: 100,
  title: "Tipos de dados",
  difficulty: Difficulties.EASY,
  new: true,
  description:
    "Java possui vários tipos de dados primitivos, como `int`, `double`, `boolean`, entre outros, que permitem armazenar diferentes tipos de valores.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual tipo de dado é usado para armazenar números inteiros em Java?",
    options: [
      { title: "double", correct: false },
      { title: "int", correct: true },
      { title: "boolean", correct: false },
      { title: "String", correct: false },
    ],
  },
};

export default JavaDataTypes;
