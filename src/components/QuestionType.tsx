import { ListBulletIcon, PlusIcon } from "@heroicons/react/20/solid";

interface QuestionTypeProps {
  selectionValue: string;
}
const QuestionType = ({ selectionValue }: QuestionTypeProps) => {
  console.log(selectionValue);
  return (
    <div>
      <div className="text-left font-Poppins text-lg font-semibold leading-5">
        <p>Question</p>
        {(selectionValue == "paragraph" ||
          selectionValue == "yes_no" ||
          selectionValue == "shortAnswer") && (
          <input
            type="text"
            className="w-full p-4 bg-white border border-black rounded mt-4"
            placeholder="Type here"
          />
        )}
        {(selectionValue == "multipleChoice" ||
          selectionValue == "dropdown") && (
          <>
            <input
              type="text"
              className="w-full p-4 bg-white border border-black rounded mt-4"
              placeholder="Type here"
            />
            <p className="mt-6">Choice</p>
            <div className="flex flex-row gap-2">
              <ListBulletIcon className="w-6 h-6 mt-8" />
              <input
                type="text"
                className="w-full p-4 bg-white border border-black rounded mt-4"
                placeholder="Type here"
              />
              <PlusIcon className="w-6 h-6 mt-8" />
            </div>
            <div className="mt-4 ml-1">
              <input type="checkbox" id="enableOtherOption" />
              <label
                className="ml-2 font-medium text-sm"
                htmlFor="enableOtherOption"
              >
                Enable Other Option
              </label>
            </div>
            {selectionValue == "multipleChoice" && (
              <div className="mt-12">
                <p>Max choice allowed</p>
                <input
                  type="number"
                  id="maxChoice"
                  className="w-full p-4 bg-white border border-black rounded mt-4"
                  placeholder="Enter number of choice allowed here"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionType;
