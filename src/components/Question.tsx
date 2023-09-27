import { PencilIcon } from "@heroicons/react/24/outline";

interface QuestionProps {
  selectionValue: string;
  questionValue: string;
}
interface Props {
  questions: QuestionProps[];
}

const Question = ({ questions }: Props) => {
  return (
    <div className="text-left px-8">
      {questions.length > 0
        ? questions.map((question) => {
            <>
              <p>{question.selectionValue}</p>;
            </>;
          })
        : null}
    </div>
  );
};

export default Question;
{
  /* <p className="flex">
        {selectionValue}
        <PencilIcon className="w-4 h-4 ml-2" />
      </p>
      <p>{questionValue}</p> */
}
