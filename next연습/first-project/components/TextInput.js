import styles from "../styles/main.module.css";

export default function TextInput({ placeholder }) {
  return (
    <input
      type="text"
      className={styles.signupinputbox}
      placeholder={placeholder}
    />
  );
}
