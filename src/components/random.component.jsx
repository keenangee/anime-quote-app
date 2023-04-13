const Random = ({ setQuotePath }) => {
  const handleClick = () => {
    setQuotePath(["random"]);
  };

  return (
    <div className="random_button_container">
      <button className="random_button" onClick={handleClick}>
        Feeling Lucky?
      </button>
    </div>
  );
};

export default Random;
