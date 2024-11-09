import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaLoops = {
  id: "java-loops",
  coins: 20,
  experience: 200,
  title: "Loops",
  difficulty: Difficulties.HARD,
  new: true,
  description:
    "Java possui várias estruturas de repetição para iterar blocos de código, como `for`, `while` e `do-while`, que ajudam a automatizar tarefas repetitivas.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual loop é mais adequado para executar um bloco de código ao menos uma vez, independentemente da condição?",
    options: [
      { title: "do-while", correct: true },
      { title: "for", correct: false },
      { title: "while", correct: false },
      { title: "foreach", correct: false },
    ],
  },
};

export default JavaLoops;
