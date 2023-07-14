import { Menu } from "./Menu";
import { Button } from "./Button";
import { MENU_STATE } from "./consts/menu";

export function MainMenu(props) {
  return (
    <Menu>
      <h1 className="animate-fall text-5xl mb-10 font-extrabold overflow-hidden">
        THE CAVE
      </h1>
      <Button
        content="Start game"
        onClick={() => props.setShownMenu(MENU_STATE.game)}
      />
      <Button
        content="Options"
        onClick={() => props.setShownMenu(MENU_STATE.options)}
      />
    </Menu>
  );
}
