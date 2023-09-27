interface Props {
  changeSelectionValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ changeSelectionValue }: Props) => {
  return (
    <div className="relative h-10  w-full pt-2  bg-white mt-2  ">
      <select
        className="w-full p-4 bg-white border border-black rounded"
        onChange={changeSelectionValue}
      >
        <option className="mt-4" value="" disabled>
          Question Type
        </option>
        <option className="mt-4" value="paragraph">
          Paragraph
        </option>
        <option className="mt-4 hover:bg-black " value="shortAnswer">
          Short answer
        </option>
        <option className="mt-4" value="yes_no">
          Yes/No
        </option>
        <option value="dropdown">Dropdown</option>
        <option value="multipleChoice">Multiple Choice</option>
        <option value="date">Date</option>
        <option value="number">Number</option>
        <option value="fileUpload">File upload</option>
        <option value="videoQuestion">Video question</option>
      </select>
    </div>
  );
};

export default Select;
