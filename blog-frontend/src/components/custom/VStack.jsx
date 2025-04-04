export const VStack = ({ children, className = "", ...props }) => {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`} {...props}>
        {children}
      </div>
    );
  };
  