interface Props {
  children: JSX.Element;
  header: string;
}
const Container = ({ children, header }: Props) => {
  return (
    <div className="w-full mt-10">
      <h2 className="bg-cyan-100 w-full text-left  min-h-[80px] py-6 pl-8 rounded-t-2xl text-2xl font-Poppins font-semibold">
        {header}
      </h2>
      <div className="w-full pb-8 bg-white rounded-b-2xl">{children}</div>
    </div>
  );
};

export default Container;
