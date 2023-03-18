export const Spinner = () => {
  return (
    <div className="flex">
      <div className="relative">
        <div className="w-8 h-8 rounded-full absolute border-4 border-solid border-grey-light"></div>

        <div className="w-8 h-8 rounded-full animate-spin absolute border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    </div>
  );
};
