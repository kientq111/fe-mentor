const Scissor = ({ handleChoice }) => {
  return (
    <div class="scissors" onClick={() => handleChoice("scissor")}>
      <div class="dummy">
        <img
          src={"/images/icon-scissors.svg"}
          className="scissor-img"
          alt="scissors"
        />
      </div>
    </div>
  );
};

export default Scissor;
