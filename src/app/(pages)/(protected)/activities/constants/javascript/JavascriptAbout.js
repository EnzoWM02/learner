import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavascriptAbout = {
  id: "js-about",
  coins: 10,
  experience: 100,
  title: "Sobre",
  difficulty: Difficulties.EASY,
  description:
    "Javascript é uma linguagem de programação de alto nível, interpretada, orientada a objetos, imperativa, estruturada e dinâmica. Foi padronizada pela ECMA através das especificações ECMA-262. O JavaScript é uma linguagem versátil e muito utilizada em aplicações web, sendo uma das principais linguagens de programação para o desenvolvimento de aplicações web.",
  type: ActivitiesType.singleChoice,
  questions: {
    title: "O que é javascript?", 
    options: [
      {
        title: "Linguagem de programação de baixo nível",
        correct: false,
      },
      {
        title: "Linguagem de programação de médio nível",
        correct: false,
      },
      {
        title: "Linguagem de programação de alto nível",
        correct: true,
      },
      {
        title: "Linguagem de programação de nível intermediário",
        correct: false,
      },
    ],
  },
};

export default JavascriptAbout;
