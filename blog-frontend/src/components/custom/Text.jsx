export const Text = ({ children, as = "p", className = "", ...props }) => {
    const Component = as;
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  };
  