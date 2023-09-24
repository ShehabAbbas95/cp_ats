import { FC } from "react";
import AddQuestion from "./AddQuestion";

const PersonalInfo: FC = () => {
  return (
    <div className="flex justify-center flex-col ">
      <h2 className="bg-[#D0F7FA]  w-full text-left  min-h-[80px] py-6 pl-8 rounded-t-2xl text-2xl font-Poppins font-semibold">
        Personal Information
      </h2>
      <form action="post" className="w-full mb-8">
        <div className="flex flex-col items-start px-8">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="mt-6 text-left">
              First Name
            </label>
            <input
              className="appearance-none bg-transparent border-b w-full text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
              type="text"
              aria-label="First name"
              name="firstName"
              required
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
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mt-6 text-left">
              Email
            </label>
            <input
              className="appearance-none bg-transparent border-b w-full text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
              type="email"
              aria-label="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <div className="mt-6 w-1/2 text-left">
                <label htmlFor="phone">Phone (without dial code)</label>
              </div>
              <div className="flex flex-row w-1/2 justify-between">
                <div className="flex flex-row  mt-4">
                  <input
                    id="phoneCheckbox"
                    type="checkbox"
                    value=""
                    className="border border-#D4D9E4"
                  />
                  <label
                    htmlFor="phoneCheckbox"
                    className="m-2 text-sm font-medium"
                  >
                    Internal
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
              type="tel"
              aria-label="phone"
              id="phone"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <div className="mt-6 w-1/2 text-left">
                <label htmlFor="nationality">Nationality</label>
              </div>
              <div className="flex flex-row w-1/2 justify-between">
                <div className="flex flex-row  mt-4">
                  <input
                    id="nationalityCheckbox"
                    type="checkbox"
                    value=""
                    className="border border-#D4D9E4"
                  />
                  <label
                    htmlFor="nationalityCheckbox"
                    className="m-2 text-sm font-medium"
                  >
                    Internal
                  </label>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="bg-white">
                    <label
                      htmlFor="nationalityInternal"
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        id="nationalityInternal"
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
              aria-label="nationality"
              name="nationality"
              id="nationality"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <div className="mt-6 w-1/2 text-left">
                <label htmlFor="currentResidence">Current Residence</label>
              </div>
              <div className="flex flex-row w-1/2 justify-between">
                <div className="flex flex-row  mt-4">
                  <input
                    id="currentResidenceCheckbox"
                    type="checkbox"
                    value=""
                    className="border border-#D4D9E4"
                  />
                  <label
                    htmlFor="currentResidenceCheckbox"
                    className="m-2 text-sm font-medium"
                  >
                    Internal
                  </label>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="bg-white">
                    <label
                      htmlFor="currentResidenceHide"
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        id="currentResidenceHide"
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
              aria-label="currentResidence"
              id="currentResidence"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <div className="mt-6 w-1/2 text-left">
                <label htmlFor="currentResidence">ID Number</label>
              </div>
              <div className="flex flex-row w-1/2 justify-between">
                <div className="flex flex-row  mt-4">
                  <input
                    id="idNumberCheckbox"
                    type="checkbox"
                    value=""
                    className="border border-#D4D9E4"
                  />
                  <label
                    htmlFor="idNumberCheckbox"
                    className="m-2 text-sm font-medium"
                  >
                    Internal
                  </label>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="bg-white">
                    <label
                      htmlFor="idNumberHide"
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        id="idNumberHide"
                      />
                      <div className="w-11 h-6  peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <label htmlFor="idNumberHide">Hide</label>
                </div>
              </div>
            </div>
            <input
              className="appearance-none bg-transparent border-b  text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
              type="number"
              aria-label="currentResidence"
              id="currentResidence"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <div className="mt-6 w-1/2 text-left">
                <label htmlFor="birthDate">Date of Birth</label>
              </div>
              <div className="flex flex-row w-1/2 justify-between">
                <div className="flex flex-row  mt-4">
                  <input
                    id="birthDateCheckbox"
                    type="checkbox"
                    value=""
                    className="border border-#D4D9E4"
                  />
                  <label
                    htmlFor="birthDateCheckbox"
                    className="m-2 text-sm font-medium"
                  >
                    Internal
                  </label>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="bg-white">
                    <label
                      htmlFor="birthDateHide"
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        id="birthDateHide"
                      />
                      <div className="w-11 h-6  peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <label htmlFor="birthDateHide">Hide</label>
                </div>
              </div>
            </div>
            <input
              className="appearance-none bg-transparent border-b  text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
              type="date"
              aria-label="birthDate"
              id="birthDate"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <div className="mt-6 w-1/2 text-left">
                <label htmlFor="gender">Gender</label>
              </div>
              <div className="flex flex-row w-1/2 justify-between">
                <div className="flex flex-row  mt-4">
                  <input
                    id="genderCheckbox"
                    type="checkbox"
                    value=""
                    className="border border-#D4D9E4"
                  />
                  <label
                    htmlFor="genderCheckbox"
                    className="m-2 text-sm font-medium"
                  >
                    Internal
                  </label>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="bg-white">
                    <label
                      htmlFor="genderHide"
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        id="genderHide"
                      />
                      <div className="w-11 h-6  peer-focus:outline-none peer-focus:ring-4  border-2 rounded-full peer  peer-checked:after:translate-x-full border-gray-400-400 peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <label htmlFor="genderHide">Hide</label>
                </div>
              </div>
            </div>
            <input
              className="appearance-none bg-transparent border-b  text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
              type="text"
              aria-label="gender"
              id="gender"
              required
            />
          </div>
        </div>
      </form>
      <AddQuestion />
    </div>
  );
};
export default PersonalInfo;
