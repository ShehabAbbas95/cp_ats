import { ChangeEvent, FC, useState } from "react";
import QuestionType from "./QuestionType";
import Select from "./Select";
import DeleteQuestion from "./DeleteQuestion";

interface Props {
  saveQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  deleteQuestions: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionValue: React.Dispatch<React.SetStateAction<string>>;
  showQuestions: boolean;
  changeSelectionValue: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectionValue: string;
}
const Questions: FC<Props> = ({
  deleteQuestions,
  showQuestions,
  saveQuestion,
  setQuestionValue,
  changeSelectionValue,
  selectionValue,
}: Props) => {
  return (
    <>
      {showQuestions && (
        <div className="max-w-xl mt-2  px-4 ">
          <h2 className="bg-cyan-100  w-full text-left  min-h-[80px] py-6 pl-8 rounded-t-2xl text-2xl font-Poppins font-semibold">
            Questions
          </h2>
          <div className="flex flex-col gap-10 bg-white px-6 rounded-b-2xl">
            <div className="mt-8">
              <p className="text-left font-Poppins text-lg font-semibold leading-5">
                Type
              </p>
              <Select changeSelectionValue={changeSelectionValue} />
            </div>
            <QuestionType
              selectionValue={selectionValue}
              setQuestionValue={setQuestionValue}
            />
            <div className="mb-8 cursor-pointer flex flex-row justify-between">
              <DeleteQuestion deleteQuestion={deleteQuestions} />
              <button
                type="button"
                className="text-green-50 text-sm font-semibold font-Poppins  bg-green-700 rounded-md px-3 py-2"
                onClick={() => {
                  saveQuestion(true);
                  deleteQuestions(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Questions;
