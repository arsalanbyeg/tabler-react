// @flow
import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +active?: boolean,
  +icon?: string,
  +iconPrefix?: string,
  +to?: string,
  +hasSubNav?: boolean,
  +rootRef?: (?HTMLElement) => void,
  +useExact?: boolean,
|};

function NavLink({
  children,
  className,
  RootComponent,
  icon,
  iconPrefix,
  active = false,
  to,
  hasSubNav,
  rootRef,
  useExact,
}: Props): React.Node {
  const classes = cn({ "nav-link": true, active: active }, className);

  const childrenForAll = (
    <React.Fragment>
      {icon && (
        <React.Fragment>
          <Icon prefix={iconPrefix} name={icon} />{" "}
        </React.Fragment>
      )}
      {children}
    </React.Fragment>
  );
  return RootComponent ? (
    <RootComponent exact={useExact || false} className={classes} to={to}>
      {childrenForAll}
    </RootComponent>
  ) : (
    <a className={classes} href={to} ref={rootRef}>
      {childrenForAll}
    </a>
  );
}

NavLink.displayName = "Nav.Link";

/** @component */
export default NavLink;
