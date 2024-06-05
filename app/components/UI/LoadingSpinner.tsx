const LoadingSpinner = () => {
  return (
    <div className="flex h-[15px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-[4px] border-l-White" />
    </div>
  );
};

export default LoadingSpinner;
