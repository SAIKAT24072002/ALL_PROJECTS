function Button({ children, type, onClickHandler }) {
  const buttonStyle = {
    success:
      "cursor-pointer animate-bounce bg-green-400 hover:bg-green-600 font-bold px-5 h-10 rounded-md transition duration-300 uppercase",
    primary:
      "cursor-pointer animate-pulse bg-indigo-300 hover:bg-indigo-700  font-bold px-5 h-10 rounded-md transition duration-300 uppercase",
    some: "cursor-pointer font-bold group relative uppercase h-10 px-5 bg-blue-300 border-2 border-blue-500 rounded-md overflow-hidden before:absolute before:inset-0 before:origin-right before:transition before:duration-300 before:bg-blue-700 before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left",
    info: "cursor-pointer hover:scale-105 transform transition duration-300 bg-cyan-500 font-bold px-5 h-10 rounded-md uppercase",
    warning:
      "cursor-pointer font-bold bg-gradient-to-r from-teal-400 to-lime-400 px-5 h-10 hover:bg-gradient-to-l hover:from-teal-400 hover:to-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-400 dark:focus:ring-teal-700 uppercase rounded-md border border-yellow-200",
    light: "linear uppercase",
    dark: "group cursor-pointer text-white bg-gray-900 hover:inset-shadow-[0px_0px_8px_5px] hover:inset-shadow-white/30 h-10 px-5 rounded transition duration-300 uppercase font-bold rounded-md",
    conic: "btn uppercase text-white",
  };

  return (
    <div className="text-center">
      <button className={buttonStyle[type]} onClick={onClickHandler}>
        {type === "conic" && <span className="text-white bg"></span>}
        {type === "light" && (
          <div>
            <div className="borderLine"></div>
            <div className="childBox">{children}</div>
          </div>
        )}
        <span className="relative transition duration-200">{children}</span>
      </button>
    </div>
  );
}

export default Button;
