import { FC } from "react";

const FooterComponent: FC = () => {
  return (
    <footer
      style={{ backgroundColor: "#3883fc", height: 40 }}
      className="fixed-bottom"
    >
      <h5 className="p-2"> copyright:NIT-Ninjas</h5>
    </footer>
  );
};

export default FooterComponent;
