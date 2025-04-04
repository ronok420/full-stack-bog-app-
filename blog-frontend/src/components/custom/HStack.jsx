export const HStack = ({ children, className = "", ...props }) => {
    return (
      <div className={`flex flex-row items-center justify-center ${className}`} {...props}>
        {children}
      </div>
    );
  };
  