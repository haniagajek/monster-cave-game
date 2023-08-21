import { Menu } from "./Menu";
import { Button } from "./Button";

export function DialogueSequencer({
  dialogue,
  handleRedirect,
  playerAnswers,
  setPlayerAnswers,
}) {
  function parseText(text) {
    for (let key in playerAnswers) {
      const pattern = new RegExp(`#${key}#`, "g");

      text = text.replace(pattern, playerAnswers[key]);
    }
    return text;
  }

  return (
    <Menu>
      {dialogue.content.map((content) => {
        return (
          <h1
            className={`mb-2 font-mono text-2xl text-green-400 text-center ${content.classes}`}
            dangerouslySetInnerHTML={{ __html: parseText(content.text) }}
          />
        );
      })}
      {dialogue.answers && dialogue.answers.length > 0 && (
        <div className="flex gap-12 mt-4 z-10">
          {dialogue.answers.map((answer) => (
            <Button
              content={parseText(answer.content)}
              onClick={() => handleRedirect(answer.redirect)}
            />
          ))}
        </div>
      )}
      {dialogue.inputs && dialogue.inputs.length > 0 && (
        <div>
          {dialogue.inputs.map((input) => (
            <input
              name={input.name}
              className=" input appearance-none bg-transparnet border-none w-full text-xl text-gray-400  mr-3 py-1 px-2 leading-tight focus:outline-none text-center mt-4"
              type="text"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setPlayerAnswers({
                    ...playerAnswers,
                    [input.name]: event.target.value,
                  });
                  handleRedirect(input.redirect);
                }
              }}
            />
          ))}
        </div>
      )}
    </Menu>
  );
}
