const ErrorCard = ({ title = "Oops! Something went wrong", message }) => {
  return (
    <div className="col-span-full bg-red-50 p-20 rounded-[48px] text-center border border-red-100">
      <h3 className="text-3xl font-semibold text-red-500 mb-2">{title}</h3>
      <p className="text-red-400 font-open-sans text-lg">
        {message}. Please try refreshing the page.
      </p>
    </div>
  );
};

export default ErrorCard;
