import { FC } from "react";
import InternalUse from "./InternalUse";
import ToggleSwitch from "./ToggleSwitch";
import FieldProps from "./FieldProps";

export const InputField: FC<FieldProps> = ({ id, label, type }: FieldProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <div className="mt-6 w-1/2 text-left">
          <label htmlFor="gender">{label}</label>
        </div>
        <div className="flex flex-row w-1/2 justify-between">
          {id && (
            <>
              <InternalUse id={`${id}Internal`} />
              <ToggleSwitch id={`${id}Show`} />
            </>
          )}
        </div>
      </div>
      <input
        className="appearance-none bg-transparent border-b  text-gray-700  leading-tight focus:outline-none  border-teal-500 mt-2"
        type={type || "text"}
        aria-label={id}
        id={id}
        name={id}
      />
    </div>
  );
};
