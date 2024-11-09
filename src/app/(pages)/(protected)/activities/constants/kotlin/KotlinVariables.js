import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const KotlinVariables = {
  id: "kotlin-variables",
  coins: 10,
  experience: 100,
  title: "Variáveis",
  difficulty: Difficulties.EASY,
  new: true,
  description:
    "Kotlin permite criar variáveis imutáveis com `val` e mutáveis com `var`, promovendo segurança e flexibilidade no gerenciamento de dados.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual palavra-chave é usada para criar uma variável imutável em Kotlin?",
    options: [
      { title: "var", correct: false },
      { title: "val", correct: true },
      { title: "let", correct: false },
      { title: "const", correct: false },
    ],
  },
};

export default KotlinVariables;
