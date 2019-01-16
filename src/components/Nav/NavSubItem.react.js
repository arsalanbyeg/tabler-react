// @flow
import * as React from "react";
import Dropdown from "../Dropdown";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +LinkComponent?: React.ElementType,
  +to?: string,
  +icon?: string,
  +iconPrefix?: string,
  +value?: string,
|};

function NavSubItem({
  children,
  LinkComponent,
  className,
  to,
  icon,
  iconPrefix,
  hasSubNav,
  value,
}: Props): React.Node {
  return (
    <Dropdown.Item to={to} icon={icon} iconPrefix={iconPrefix} RootComponent={LinkComponent}>
      {value || children}
    </Dropdown.Item>
  );
}

NavSubItem.displayName = "Nav.SubItem";

export default NavSubItem;
