import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import Container from "./Container";
import Questions from "./Questions";
import AddQuestion from "./AddQuestion";
import { QuestionProps } from "./Question";

interface Props {
  applicationForm?: {};
  setAppl: React.Dispatch<React.SetStateAction<{}>>;
}
const Profile: FC<Props> = ({ setAppl, applicationForm }) => {
  const [profileQuestions, setProfileQuestions] = useState<boolean>(false);

  const [questionValue, setQuestionValue] = useState<string>("");
  const [selectionValue, setSelectionValue] = useState<string>("");
  const [questionsArray, setQuestionsArray] = useState<QuestionProps[]>([]);
  const changeSelectionValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectionValue(value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataObj: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      dataObj[key] = value;
    }
    dataObj["personalQuestions"] = questionsArray;
    setAppl({ ...applicationForm, dataObj });
    // const res = await fetch(
    //   `http://127.0.0.1:4010/api/803.0986876156022/programs/nihil/application-form
    //   `,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       data: {
    //         id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    //         type: "applicationFOrm",
    //         attributes: {
    //           personalInformation: {},
    //         },
    //       },
    //     }),
    //   }
    // );
    // if (!res.ok) {
    //   console.log("error");
    //   return;
    // }
  };
  return (
    <div>
      <Container header="Profile">
        <div>
          <form action="PUT" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start px-8 mb-8">
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <div className="mt-6 w-1/2 text-left">
                    <label
                      className="font-semibold text-xl"
                      htmlFor="education"
                    >
                      Education
                    </label>
                  </div>
                  <div className="flex flex-row w-1/2 justify-between">
                    <div className="flex flex-row  mt-4">
                      <input
                        id="educationCheckbox"
                        type="checkbox"
                        className="border "
                      />
                      <label
                        htmlFor="educationCheckbox"
                        className="m-2 text-sm font-medium"
                      >
                        Mandatory
                      </label>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <div className="bg-white">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6  peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <label htmlFor="hidePhone">Hide</label>
                    </div>
                  </div>
                </div>
                <input
                  className="appearance-none bg-transparent border-b  text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
                  type="text"
                  aria-label="education"
                  id="education"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <div className="mt-6 w-1/2 text-left">
                    <label
                      className="font-semibold text-xl"
                      htmlFor="experience"
                    >
                      Experience
                    </label>
                  </div>
                  <div className="flex flex-row w-1/2 justify-between">
                    <div className="flex flex-row  mt-4">
                      <input
                        id="experienceCheckbox"
                        type="checkbox"
                        className="border "
                      />
                      <label
                        htmlFor="experienceCheckbox"
                        className="m-2 text-sm font-medium"
                      >
                        Mandatory
                      </label>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <div className="bg-white">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6  peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <label htmlFor="hideExperience">Hide</label>
                    </div>
                  </div>
                </div>
                <input
                  className="appearance-none bg-transparent border-b  text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
                  type="text"
                  aria-label="experience"
                  id="experience"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <div className="mt-6 w-1/2 text-left">
                    <label className="font-semibold text-xl" htmlFor="resume">
                      Resume
                    </label>
                  </div>
                  <div className="flex flex-row w-1/2 justify-between">
                    <div className="flex flex-row  mt-4">
                      <input
                        id="resumeCheckbox"
                        type="checkbox"
                        className="border "
                      />
                      <label
                        htmlFor="resumeCheckbox"
                        className="m-2 text-sm font-medium"
                      >
                        Mandatory
                      </label>
                    </div>
                    <div className="mt-6 flex gap-2">
                      <div className="bg-white">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6  peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <label htmlFor="hideResume">Hide</label>
                    </div>
                  </div>
                </div>
                <input
                  className="appearance-none bg-transparent border-b  text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
                  type="text"
                  aria-label="resume"
                  id="resume"
                  required
                />
              </div>
            </div>
            <div className="cursor-pointer">
              <AddQuestion addQuestion={setProfileQuestions} />
            </div>
            <Questions
              showQuestions={profileQuestions}
              deleteQuestions={setProfileQuestions}
              setQuestionValue={setQuestionValue}
              changeSelectionValue={changeSelectionValue}
              selectionValue={selectionValue}
              setQuestionsArray={setQuestionsArray}
              questionsArray={questionsArray}
              questionValue={questionValue}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
