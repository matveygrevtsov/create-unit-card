import { FC } from "react";

import styles from "./styles.module.css";

interface IProps {
  src:
    | "iconBow.jpg"
    | "iconCoin.jpg"
    | "iconHealth.jpg"
    | "iconHp.jpg"
    | "iconSpeed.jpg";
}

export const Icon: FC<IProps> = ({ src }) => {
  return (
    <div className={styles.root}>
      <img
        alt={src}
        src={`${process.env.PUBLIC_URL}/${src}`}
        className={styles.image}
      />
    </div>
  );
};
