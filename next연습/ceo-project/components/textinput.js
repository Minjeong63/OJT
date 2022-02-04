export default function TextInput({ content, onchange, value }) {
  return (
    <input
      type="text"
      placeholder={`${content} 입력하세요.`}
      onChange={onchange}
      value={value}
      maxLength="20"
      minLength="2"
    />
  );
}
