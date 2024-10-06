const useClass = (type?: "folder") => {
  return `w-full cursor-pointer transition-all duration-300 rounded-lg hover:bg-pink-500 ${
    type && "flex space-x-2"
  }`;
};

export default useClass;
