import { ChangeEvent, FC, useState } from "react";
import QuestionType from "./QuestionType";
import Select from "./Select";
import DeleteQuestion from "./DeleteQuestion";

interface Props {
  deleteQuestions: React.Dispatch<React.SetStateAction<boolean>>;
  showQuestions: boolean;
}
const Questions: FC<Props> = ({ deleteQuestions, showQuestions }: Props) => {
  const [selectionValue, setSelectionValue] = useState<string>("");
  const changeSelectionValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectionValue(value);
  };

  return (
    <>
      {showQuestions && (
        <div className="max-w-xl mt-2 mb-48 px-4 ">
          <h2 className="bg-[#D0F7FA]  w-full text-left  min-h-[80px] py-6 pl-8 rounded-t-2xl text-2xl font-Poppins font-semibold">
            Questions
          </h2>
          <div className="flex flex-col gap-10 bg-white px-6 rounded-b-2xl">
            <div className="mt-8">
              <p className="text-left font-Poppins text-lg font-semibold leading-5">
                Type
              </p>
              <Select changeSelectionValue={changeSelectionValue} />
            </div>
            <QuestionType selectionValue={selectionValue} />
            <div className="mb-8 cursor-pointer">
              <DeleteQuestion deleteQuestion={deleteQuestions} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Questions;
