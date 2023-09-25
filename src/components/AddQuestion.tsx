import { PlusIcon } from "@heroicons/react/20/solid";
import { FC } from "react";

interface Props {
  addQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddQuestion: FC<Props> = ({ addQuestion }: Props) => {
  return (
    <div>
      <div className="flex ml-6 gap-3" onClick={() => addQuestion(true)}>
        <PlusIcon className="w-8 h-8" />
        <p className="mt-1">Add a question</p>
      </div>
    </div>
  );
};

export default AddQuestion;
