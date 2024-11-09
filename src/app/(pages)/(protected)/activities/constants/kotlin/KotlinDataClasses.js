import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const KotlinDataClasses = {
  id: "kotlin-data-classes",
  coins: 25,
  experience: 200,
  title: "Classes de dados",
  difficulty: Difficulties.HARD,
  new: true,
  description:
    "Kotlin permite a criação de data classes, que são classes especializadas para armazenar dados de forma eficiente.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual palavra-chave é usada para definir uma classe de dados em Kotlin?",
    options: [
      { title: "class", correct: false },
      { title: "object", correct: false },
      { title: "data", correct: true },
      { title: "sealed", correct: false },
    ],
  },
};

export default KotlinDataClasses;
