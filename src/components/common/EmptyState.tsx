type TEmptyStateProps = {
  title: string;
  subtext?: string;
  children?: React.ReactNode;
};

export const EmptyState = ({ title, subtext, children }: TEmptyStateProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-2xl">{title}</h3>
      <p className="my-2">{subtext}</p>
      {children}
    </div>
  );
};
