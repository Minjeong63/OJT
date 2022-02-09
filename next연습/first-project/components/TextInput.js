import styles from "../styles/main.module.css";

export default function TextInput({ placeholder, onchange, value }) {
  return (
    <>
      <input
        type="text"
        className={styles.signupinputbox}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
      />
    </>
  );
}
