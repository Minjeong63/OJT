import styles from "../styles/main.module.css";

export default function CheckButton({ content, onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {content}
      </button>
      <style jsx>
        {`
          .btn:not(:disabled):not(.disabled) {
            cursor: pointer;
          }

          .btn {
            width: 400px;
            height: 50px;
            transition: 0.4s;
            margin: 4px;
            border-radius: 2rem;
            font-size: 30px;
            display: flex;
            padding: 0.5rem 0.75rem;
            display: block;
            color: #000000;
            background-color: #fdc13efa;
            border-color: #fdc13efa;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            font-weight: bold;
          }

          .btn:hover {
            color: #000000;
            background-color: rgb(243, 200, 59);
            border-color: rgb(243, 200, 59);
            text-decoration: none;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}
