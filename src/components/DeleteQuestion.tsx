import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

interface DeleteQuestionProps {
  deleteQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}
const DeleteQuestion: FC<DeleteQuestionProps> = ({
  deleteQuestion,
}: DeleteQuestionProps) => {
  return (
    <div onClick={() => deleteQuestion(false)}>
      <div className="flex  gap-3 text-red-800 font-bold">
        <XMarkIcon className="w-8 h-8" />
        <p className="mt-1">Delete question</p>
      </div>
    </div>
  );
};

export default DeleteQuestion;
