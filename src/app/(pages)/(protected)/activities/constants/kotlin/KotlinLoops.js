import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const KotlinLoops = {
  id: "kotlin-loops",
  coins: 15,
  experience: 150,
  title: "Laços de repetição",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "Laços `for` e `while` em Kotlin permitem executar um bloco de código repetidamente com base em uma condição ou um intervalo.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual laço é usado para iterar sobre uma faixa de valores em Kotlin?",
    options: [
      { title: "repeat", correct: false },
      { title: "do-while", correct: false },
      { title: "for", correct: true },
      { title: "loop", correct: false },
    ],
  },
};

export default KotlinLoops;
