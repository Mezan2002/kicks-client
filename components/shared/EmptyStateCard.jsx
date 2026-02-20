const EmptyStateCard = ({
  title = "No data available",
  message = "Check back soon for latest additions!",
}) => {
  return (
    <div className="col-span-full bg-light-gray/30 p-20 rounded-3xl text-center border border-dashed border-secondary">
      <h3 className="text-3xl font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-secondary font-open-sans text-lg">{message}</p>
    </div>
  );
};

export default EmptyStateCard;
