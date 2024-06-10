import { useFormContext } from "../../../Main/Main";

import styles from "./styles.module.css";

export const Avatar = () => {
  const { values } = useFormContext();

  return <img className={styles.root} src={values.imageSrc} />;
};
