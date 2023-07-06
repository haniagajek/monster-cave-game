export function Button(props) {
  return (
    <button
      className="
        min-w-[128px]
        max-w-[256px]
        w-2/4
        py-3
        px-12
        border-green-400
        border-solid
        border-2
        transition
        ease-in-out
        delay-150
        hover:scale-105
        hover:bg-gray-900
        duration-300"
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}
