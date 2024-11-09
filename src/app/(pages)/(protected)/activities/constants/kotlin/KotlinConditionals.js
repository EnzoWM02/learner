import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const KotlinConditionals = {
  id: "kotlin-conditionals",
  coins: 15,
  experience: 150,
  title: "Condicionais",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "Kotlin usa estruturas condicionais como `if`, `else` e `when` para controle de fluxo, permitindo tomada de decisão no código.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual palavra-chave é usada para selecionar uma alternativa em múltiplas condições em Kotlin?",
    options: [
      { title: "when", correct: true },
      { title: "switch", correct: false },
      { title: "choose", correct: false },
      { title: "select", correct: false },
    ],
  },
};

export default KotlinConditionals;
