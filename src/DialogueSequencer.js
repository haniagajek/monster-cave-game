import { Menu } from "./Menu";
import { Button } from "./Button";

export function DialogueSequencer({ dialogue, handleRedirect }) {
  return (
    <Menu>
      <div>
        <h1
          className="mb-2 font-mono text-2xl text-green-400 text-center"
          dangerouslySetInnerHTML={{ __html: dialogue.content }}
        />
      </div>
      <div className="flex gap-12 mt-4">
        {dialogue.answers.map((answer) => (
          <Button
            content={answer.content}
            onClick={() => handleRedirect(answer.redirect)}
          />
        ))}
      </div>
    </Menu>
  );
}
