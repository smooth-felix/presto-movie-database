const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer fixed-bottom text-center text-info">
      <p>Presto Movie Library {year}</p>
    </div>
  );
};

export default Footer;
