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
        <option className="mt-4" value="Paragraph">
          Paragraph
        </option>
        <option className="mt-4 hover:bg-black " value="ShortAnswer">
          Short answer
        </option>
        <option className="mt-4" value="YesNo">
          Yes/No
        </option>
        <option value="Dropdown">Dropdown</option>
        <option value="MultipleChoice">Multiple Choice</option>
        <option value="Date">Date</option>
        <option value="Number">Number</option>
        <option value="FileUpload">File upload</option>
        <option value="Video Question">Video question</option>
      </select>
    </div>
  );
};

export default Select;
