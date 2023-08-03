const Rock = ({ handleChoice }) => {
  return (
    <div class="rock" onClick={() => handleChoice("rock")}>
      <div class="dummy">
        <img src={"/images/icon-rock.svg"} className="rock-img" alt="rock" />
      </div>
    </div>
  );
};

export default Rock;
