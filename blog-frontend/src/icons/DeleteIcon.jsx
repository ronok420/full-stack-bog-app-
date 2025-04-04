export const DeleteIcon = ({ size = 20 }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-600"
      >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6L18.2 19.3C18.1 20.2 17.3 21 16.3 21H7.7C6.7 21 5.9 20.2 5.8 19.3L5 6" />
        <path d="M10 11V17" />
        <path d="M14 11V17" />
        <path d="M9 6V4C9 3.4 9.4 3 10 3H14C14.6 3 15 3.4 15 4V6" />
      </svg>
    );
  };
  