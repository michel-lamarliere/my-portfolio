"use client";

import { CSSProperties, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

type NavLinkProps = {
  children: ReactNode;
  className?: string;
  activeClassName: string;
  style?: CSSProperties;
} & LinkProps;

export function NavLink({
  children,
  activeClassName,
  className,
  style,
  ...props
}: NavLinkProps) {
  const { href } = props;
  const pathName = usePathname();

  const isActive = pathName === href;

  const classes = classnames({
    [`${className}`]: className,
    [`${activeClassName}`]: isActive
  });

  return (
    <Link {...props} className={classes} style={style}>
      {children}
    </Link>
  );
}
