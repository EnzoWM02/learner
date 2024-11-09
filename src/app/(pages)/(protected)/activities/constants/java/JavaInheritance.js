import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaInheritance = {
  id: "java-inheritance",
  coins: 20,
  experience: 200,
  title: "Herança",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "Herança permite que uma classe herde atributos e métodos de outra classe, promovendo reutilização e organização de código.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "Qual palavra-chave é usada para uma classe herdar outra em Java?",
    options: [
      { title: "extends", correct: true },
      { title: "implements", correct: false },
      { title: "inherits", correct: false },
      { title: "super", correct: false },
    ],
  },
};

export default JavaInheritance;
