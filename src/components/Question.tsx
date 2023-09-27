import { PencilIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export interface QuestionProps {
  selectionValue?: string;
  questionValue?: string;
}
interface Props {
  questions: QuestionProps[];
}

const Question = ({ questions }: Props) => {
  return (
    <div className="text-left px-8">
      {questions.length > 0
        ? questions.map((question, index) => (
            <div className="border-b-2 mt-6" key={index}>
              <p className="flex">
                {question.selectionValue}
                <PencilIcon className="w-4 h-4 ml-2" />
              </p>
              <p>{question.questionValue}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Question;
