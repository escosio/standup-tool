import { useState } from "react";

export function PersonStandup({
  name,
  onAddStandup,
  onSetLast,
  onAddBreakout,
}) {
  const [went, updateWent] = useState(false);
  const [update, updateUpdate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateWent(!went);
    if (!update) return; // if there is no update, skip adding to the list
    onAddStandup({ personName: name, message: update });
  }

  function handleSetLast(e) {
    e.preventDefault();
    onSetLast(name);
  }

  function handleNeedBreakout(breakout) {
    onAddBreakout(breakout);
    console.log(breakout, "added to breakouts");
  }

  return (
    <>
      <form
        style={went ? { opacity: "20%" } : {}}
        className="person-standup"
        value={update}
        key={name}
      >
        <div className="name-checkbox">
          <li key={name} onClick={(e) => updateWent(!e)}>
            {name}
          </li>
        </div>
        <span>
          {!went && (
            <>
              <textarea
                placeholder="Enter standup here..."
                onChange={(e) => updateUpdate(e.target.value)}
              ></textarea>
              <div>
                <PrimaryButtonGroup handleSubmit={handleSubmit} />
                <SecondaryButtonGroup
                  handleSetLast={handleSetLast}
                  handleNeedBreakout={handleNeedBreakout}
                  name={name}
                />
              </div>
            </>
          )}
        </span>
      </form>
    </>
  );
}

export default PersonStandup;

function PrimaryButtonGroup({ handleSubmit }) {
  return (
    <div>
      <input className="button" type="submit" onClick={handleSubmit} />
      <button onClick={handleSubmit} className="secondary-button">
        Not attending
      </button>
    </div>
  );
}

function SecondaryButtonGroup({ handleSetLast, handleNeedBreakout, name }) {
  return (
    <div className="person-standup-section2">
      <li
        className="clickable-item"
        style={{ fontSize: "15px", marginBottom: "10px" }}
        onClick={handleSetLast}
      >
        Move to bottom
      </li>
      <li>
        <label>Need breakout: </label>
        <input type="checkbox" onChange={() => handleNeedBreakout(name)} />
      </li>
    </div>
  );
}
