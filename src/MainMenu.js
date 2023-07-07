import { Menu } from "./Menu";
import { Button } from "./Button";
import { MENU_STATE } from "./consts/menu";

export function MainMenu(props) {
  return (
    <Menu>
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
