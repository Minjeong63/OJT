export default function OnClickButton({ onclick, content }) {
  return (
    <div>
      <button className="color" onClick={onclick}>
        {content}
      </button>
      <style jsx>
        {`
          div {
            text-align: center;
            font-size: xx-large;
          }
          .color {
            color: white;
            background-color: tomato;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
}
