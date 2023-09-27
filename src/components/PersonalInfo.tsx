import { FC, FormEventHandler, useState } from "react";
import AddQuestion from "./AddQuestion";
import Container from "./Container";
import Questions from "./Questions";
import ToggleSwitch from "./ui/ToggleSwitch";
import InternalUse from "./ui/InternalUse";
import { InputField } from "./ui/InputField";

interface PersonalInfoTypes {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  nationality: string;
  currentResidence: string;
  idNumber: number;
  dateOfBirth: Date;
  gender: string;
}

const PersonalInfo: FC = () => {
  const [personalInfoQuestions, setPersonalInfoQuestions] =
    useState<boolean>(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataObj: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      dataObj[key] = value;
    }
    console.log(dataObj);

    const res = await fetch(
      `http://127.0.0.1:4010/api/829.08273662867/programs/excepturi/application-form
      `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            id: "497f6eca-6276-4993-bfeb-52cbbbba6f08",
            type: "applicationForm",
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
          action="POST"
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

          <div className="cursor-pointer">
            <AddQuestion addQuestion={setPersonalInfoQuestions} />
          </div>
          {personalInfoQuestions && (
            <Questions
              showQuestions={personalInfoQuestions}
              deleteQuestions={setPersonalInfoQuestions}
            />
          )}
          <button type="submit">Submit</button>
        </form>
      </Container>
    </div>
  );
};
export default PersonalInfo;
