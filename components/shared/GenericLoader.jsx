import Image from "next/image";

const GenericLoader = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center p-20 w-full ${className}`}
    >
      <div className="animate-pulse">
        <Image
          src="/images/shared/logo.png"
          alt="Loading..."
          width={120}
          height={60}
          className="opacity-50"
        />
      </div>
    </div>
  );
};

export default GenericLoader;
