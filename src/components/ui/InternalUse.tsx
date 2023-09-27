interface CheckboxProps {
  id: string;
}
const InternalUse = ({ id }: CheckboxProps) => {
  return (
    <div className="flex flex-row mt-4">
      <input name={id} id={id} type="checkbox" className="border" />
      <label htmlFor={id} className="m-2 text-sm font-medium">
        Internal
      </label>
    </div>
  );
};

export default InternalUse;
