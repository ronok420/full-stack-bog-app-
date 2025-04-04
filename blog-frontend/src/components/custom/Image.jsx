export const Image = ({ alt = "", loading = "lazy", className = "", ...props }) => {
    return <img alt={alt} loading={loading} className={className} {...props} />;
  };
  