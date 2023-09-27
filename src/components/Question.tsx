import { PencilIcon } from "@heroicons/react/24/outline";

export interface QuestionProps {
  type?: string;
  question?: string;
}
interface Props {
  questions: QuestionProps[];
  showEdit: boolean;
}

const Question = ({ questions, showEdit }: Props) => {
  return (
    <div className="text-left px-8">
      {questions.length > 0
        ? questions.map((question, index) => (
            <div className="border-b-2 mt-6" key={index}>
              <p className="flex justify-between">
                {question.type}
                {showEdit && <PencilIcon className="w-4 h-4 ml-2" />}
              </p>
              <p>{question.question}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default Question;
