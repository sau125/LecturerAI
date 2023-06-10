import { FC } from "react";

const HeaderComponent: FC = () => {
  return (
    <nav
      className="justify-content-center align-items-center"
      style={{ height: 100 }}
    >
      <h1 className="bg-warning rounded h-100 pt-4">LecturerAI</h1>
    </nav>
  );
};

export default HeaderComponent;
