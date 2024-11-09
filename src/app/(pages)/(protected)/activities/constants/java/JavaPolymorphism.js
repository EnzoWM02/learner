import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaPolymorphism = {
  id: "java-polymorphism",
  coins: 40,
  experience: 400,
  title: "Polimorfismo",
  difficulty: Difficulties.HARD,
  new: true,
  description:
    "O polimorfismo permite que métodos com o mesmo nome sejam usados de maneiras diferentes, dependendo do contexto ou do objeto que invoca o método.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual é a vantagem principal do polimorfismo em Java?",
    options: [
      {
        title: "Permite sobrescrever métodos de forma obrigatória",
        correct: false,
      },
      { title: "Permite evitar a herança múltipla", correct: false },
      {
        title:
          "Permite tratar objetos de diferentes classes como se fossem de uma única classe base",
        correct: true,
      },
      { title: "Permite manipular variáveis globais", correct: false },
    ],
  },
};

export default JavaPolymorphism;
