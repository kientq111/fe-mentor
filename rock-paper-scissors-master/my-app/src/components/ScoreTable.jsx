const ScoreTable = ({ score }) => {
  return (
    <div className="score-container">
      <h1 className="score-title">
        ROCK <br /> PAPER <br /> SCISSORS
      </h1>
      <div className="score-number">
        <div
          style={{
            fontSize: 15,
            letterSpacing: "1px",
            fontWeight: 500,
            color: "hsl(229, 64%, 46%)",
            marginTop: 10,
          }}
        >
          SCORE
        </div>
        <div
          style={{
            fontSize: 50,
            fontWeight: "bold",
            color: "hsl(217, 16%, 45%)",
            marginTop: -10,
          }}
        >
          {score}
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
