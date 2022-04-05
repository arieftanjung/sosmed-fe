export const HeaderIcons = ({ Icon }) => {
  return (
    <div className="md:hover:bg-gray-100 flex items-center rounded-xl cursor-pointer  active:border-b-2 text-gray-500 hover:text-blue-500 active:border-blue-500">
      <Icon height={30} className="text-center " />
    </div>
  );
};
