export function Menu(props) {
  return (
    <div className="h-full w-full  bg-white min-w-[320px] min-h-[290px] shadow-sm shadow-green-400 rounded-md p-4 overflow-hidden relative">
      <div className="w-full h-full flex items-center justify-center  border-green-400 border-2 border-dashed">
        <div className="flex flex-col justify-center align-middle items-center content-center w-full gap-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

// @todo: https://stackoverflow.com/questions/28365839/dashed-border-animation-in-css3-animation
