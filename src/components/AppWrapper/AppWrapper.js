const AppWrapper = ({ children }) => (
  <div className="flex-grow flex flex-col m-0 mx-auto w-full max-w-3xl py-6 px-4 min-h-full sm:p-8 md:relative">
    {children}
  </div>
);

export default AppWrapper;
