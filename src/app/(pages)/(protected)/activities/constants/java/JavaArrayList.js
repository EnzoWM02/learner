import ActivitiesType from "src/app/(pages)/(protected)/activities/constants/ActivitiesType";
import Difficulties from "src/app/(pages)/(protected)/activities/constants/Difficulties";

const JavaArrayList = {
  id: "java-arraylist",
  coins: 20,
  experience: 200,
  title: "ArrayList",
  difficulty: Difficulties.MEDIUM,
  new: true,
  description:
    "A classe `ArrayList` é uma implementação de lista dinâmica em Java que permite armazenar e manipular elementos de forma eficiente.",
  type: ActivitiesType.singleChoice,
  questions: {
    title:
      "Qual método é usado para adicionar um elemento a um `ArrayList` em Java?",
    options: [
        { title: "insert()", correct: false },
        { title: "append()", correct: false },
        { title: "put()", correct: false },
        { title: "add()", correct: true },
    ],
  },
};

export default JavaArrayList;
