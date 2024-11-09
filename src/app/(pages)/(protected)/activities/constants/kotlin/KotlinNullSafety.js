import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const KotlinNullSafety = {
  id: "kotlin-null-safety",
  coins: 25,
  experience: 200,
  title: "Null Safety",
  difficulty: Difficulties.HARD,
  new: true,
  description:
    "Kotlin introduz null safety para evitar erros de referência nula, permitindo que tipos aceitem ou não valores nulos.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual símbolo é usado em Kotlin para indicar que uma variável pode ser nula?",
    options: [
      { title: "!", correct: false },
      { title: ":", correct: false },
      { title: "*", correct: false },
      { title: "?", correct: true },
    ],
  },
};

export default KotlinNullSafety;
