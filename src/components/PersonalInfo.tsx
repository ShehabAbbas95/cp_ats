import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import AddQuestion from "./AddQuestion";
import Container from "./Container";
import Questions from "./Questions";
import { InputField } from "./ui/InputField";
import Question, { QuestionProps } from "./Question";

interface Props {
  applicationForm?: {};
  setAppl: React.Dispatch<React.SetStateAction<{}>>;
}
const PersonalInfo: FC<Props> = ({ setAppl, applicationForm }: Props) => {
  const [personalInfoQuestions, setPersonalInfoQuestions] =
    useState<boolean>(false);
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

    const res = await fetch(
      `http://127.0.0.1:4010/api/803.0986876156022/programs/nihil/application-form
      `,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "applicationFOrm",
            attributes: {
              personalInformation: {
                firstName: { firstName: dataObj.firstName },
                lastName: { lastName: dataObj.lastName },
                emailId: { emailId: dataObj.emailId },
                phoneNumber: {
                  phoneNumber: dataObj.phoneNumber,
                  internalUse: dataObj.phoneInternal,
                  show: dataObj.phoneShow,
                },
                nationality: {
                  phoneNumber: dataObj.nationality,
                  internalUse: dataObj.nationalityInternal,
                  show: dataObj.nationalityShow,
                },
                currentResidence: {
                  phoneNumber: dataObj.currentResidence,
                  internalUse: dataObj.currentResidenceInternal,
                  show: dataObj.currentResidenceShow,
                },
                idNumber: {
                  phoneNumber: dataObj.idNumber,
                  internalUse: dataObj.idNumberInternal,
                  show: dataObj.idNumberShow,
                },
                dateOfBirth: {
                  phoneNumber: dataObj.dateOfBirth,
                  internalUse: dataObj.dateOfBirthInternal,
                  show: dataObj.dateOfBirthShow,
                },
                gender: {
                  phoneNumber: dataObj.gender,
                  internalUse: dataObj.genderInternal,
                  show: dataObj.genderShow,
                },
                personalQuestions: dataObj.personalQuestions,
              },
            },
          },
        }),
      }
    );
    if (!res.ok) {
      console.log("error");
      return;
    }
  };
  return (
    <div className="flex justify-center flex-col ">
      <Container header="Personal Information">
        <form
          action="PUT"
          className="w-full mb-8 bg-white rounded-b-2xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start px-8 mb-8">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="mt-6 text-left">
                First Name
              </label>
              <input
                className="appearance-none bg-transparent border-b w-full text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
                type="text"
                aria-label="First name"
                name="firstName"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="mt-6 text-left">
                Last Name
              </label>
              <input
                className="appearance-none bg-transparent border-b w-full text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
                type="text"
                aria-label="Last name"
                name="lastName"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="emailId" className="mt-6 text-left">
                Email
              </label>
              <input
                className="appearance-none bg-transparent border-b w-full text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
                type="email"
                aria-label="email"
                name="emailId"
                id="emailId"
              />
            </div>
            <InputField id="phoneNumber" label="Phone Number" type="tel" />
            <InputField id="nationality" label="Nationality" />
            <InputField id="currentResidence" label="Current Residence" />
            <InputField id="idNumber" label="ID Number" type="number" />
            <InputField id="dateOfBirth" label="Date Of Birth" type="date" />
            <InputField id="gender" label="Gender" />
          </div>
          {questionsArray.length > 0 && <Question questions={questionsArray} />}
          {personalInfoQuestions && (
            <Questions
              showQuestions={personalInfoQuestions}
              deleteQuestions={setPersonalInfoQuestions}
              setQuestionValue={setQuestionValue}
              changeSelectionValue={changeSelectionValue}
              selectionValue={selectionValue}
              setQuestionsArray={setQuestionsArray}
              questionsArray={questionsArray}
              questionValue={questionValue}
            />
          )}
          <div className="cursor-pointer mt-4">
            <AddQuestion addQuestion={setPersonalInfoQuestions} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Container>
    </div>
  );
};
export default PersonalInfo;
