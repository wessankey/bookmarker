import React, { ComponentType } from "react";
import Link from "next/link";

type TAppSidebarListItemProps = {
  label: string;
  Icon: ComponentType<React.ComponentProps<"svg">>;
  href: React.ComponentProps<typeof Link>["href"];
  isActive: boolean;
};

const AppSidebarListItem: React.FC<TAppSidebarListItemProps> = ({
  label,
  Icon,
  href,
  isActive,
}) => {
  return (
    <Link href={href}>
      <div
        className={`flex space-x-2 mt-1 hover:cursor-pointer px-3 py-2 
    hover:bg-primary-light rounded-md ${isActive && "bg-primary text-white"}`}
      >
        <Icon className="h-5 w-5" />
        <p>{label}</p>
      </div>
    </Link>
  );
};

export default AppSidebarListItem;
