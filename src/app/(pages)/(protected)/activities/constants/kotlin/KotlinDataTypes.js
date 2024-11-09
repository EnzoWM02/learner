import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const KotlinDataTypes = {
  id: "kotlin-data-types",
  coins: 10,
  experience: 100,
  title: "Tipos de dados",
  difficulty: Difficulties.EASY,
  new: true,
  description:
    "Kotlin possui vários tipos de dados básicos, como `Int`, `Double`, `String`, entre outros, que ajudam a estruturar o armazenamento de informações.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual tipo de dado é utilizado para armazenar números decimais em Kotlin?",
    options: [
      { title: "Int", correct: false },
      { title: "Boolean", correct: false },
      { title: "Char", correct: false },
      { title: "Double", correct: true },
    ],
  },
};

export default KotlinDataTypes;
