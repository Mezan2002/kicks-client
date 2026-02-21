const ArrowRightUp = ({ className, strokeColor = "#E7E7E3" }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="32"
      height="32"
    >
      <path
        d="M10.1668 9.10565H22.8947V21.8336M22.0108 9.98954L9.10615 22.8942"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightUp;
