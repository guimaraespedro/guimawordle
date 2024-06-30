import "./index.css";

const HelpModal = ({ open = false, closeModal }) => {
  const getClass = () => {
    return open ? "open" : "closed";
  };
  return (
    <div className={`modal ${getClass()}`}>
      <header>
        <button className="close-button" onClick={closeModal}>
          X
        </button>
      </header>
      <p>
        Discover the right word in 6 tries. After each try, the tiles show how
        close you are to the solution.
      </p>
      <div className="row">
        <div className="cell correct">T</div>
        <div className="cell">E</div>
        <div className="cell">A</div>
        <div className="cell">M</div>
        <div className="cell">S</div>
      </div>
      <p>T E A M S The letter T is in the word and in the correct position.</p>
      <div className="row">
        <div className="cell absent">O</div>
        <div className="cell absent">R</div>
        <div className="cell present">G</div>
        <div className="cell absent">A</div>
        <div className="cell absent">N</div>
      </div>
      <p>O R G A N The letter G is in the word but in the wrong position.</p>
      <div className="row">
        <div className="cell absent">P</div>
        <div className="cell absent">L</div>
        <div className="cell absent">U</div>
        <div className="cell absent">G</div>
        <div className="cell absent">S</div>
      </div>
      <p>P L U G S The letter G is not in the word.</p>
      <p>Words may have repeated letters.</p>
    </div>
  );
};

export { HelpModal };
