export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="content">Copyright © MKcarRental. All Rights Reserved.</p>
      </footer>
      <style jsx>
        {`
          .footer {
            position: absolute;
            bottom: 0;
            left: 0;
          }
        `}
      </style>
    </div>
  );
}
