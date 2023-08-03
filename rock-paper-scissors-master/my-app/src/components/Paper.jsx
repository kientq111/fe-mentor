const Paper = ({ handleChoice }) => {
  return (
    <div class="paper"  onClick={() => handleChoice("paper")}>
      <div class="dummy">
        <img src={"/images/icon-paper.svg"} className="paper-img" alt="paper" />
      </div>
    </div>
  );
};

export default Paper;
