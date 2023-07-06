import { Menu } from "./Menu";
import { Button } from "./Button";
import { MENU_STATE } from "./consts/menu";

export function OptionsMenu(props) {
  return (
    <Menu>
      <Button content="Full-Screen" />
      <Button
        content="Cancel"
        onClick={() => props.setShownMenu(MENU_STATE.main)}
      />
    </Menu>
  );
}
