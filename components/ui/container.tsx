interface IContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return (
    <div className="mx-auto max-w-7xl">
      {children}
    </div>
  );
}