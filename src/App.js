import "./styles.css";
import { useEffect, useState } from "react";
import GoYanks, { TempHeader } from "./components/TempHeader";
import Header from "./components/Header";
import niceDateString from "./date";
import StandupList from "./components/standup-list/StandupList";
import AddTeamMember from "./components/AddTeamMember";
import { Emoji } from "./emojiLists";

const emojis = new Emoji();

const defaultNames = [
  `Scott D'Antuono ${emojis.getRandomEmoji()}`,
  `Michael Scott ${emojis.getRandomEmoji()}`,
  `Dwight Schrute ${emojis.getRandomEmoji()}`,
  `Jim Halpert ${emojis.getRandomEmoji()}`,
  `Pam Beasley ${emojis.getRandomEmoji()}`,
  `Ryan Howard ${emojis.getRandomEmoji()}`,
  `Andy Bernard ${emojis.getRandomEmoji()}`,
  `Robert California ${emojis.getRandomEmoji()}`,
  `Stanley Hudson ${emojis.getRandomEmoji()}`,
  `Kevin Malone ${emojis.getRandomEmoji()}`,
  `Meredith Palmer ${emojis.getRandomEmoji()}`,
  `Angela Martin ${emojis.getRandomEmoji()}`,
  `Oscar Martinez  ${emojis.getRandomEmoji()}`,
  `Phyllis Vance/Lapin  ${emojis.getRandomEmoji()}`,
  `Kelly Kapoor  ${emojis.getRandomEmoji()}`,
  `Toby Flenderson  ${emojis.getRandomEmoji()}`,
  `Creed Bratton ${emojis.getRandomEmoji()}`,
  `Darryl Philbin ${emojis.getRandomEmoji()}`,
];

export default function App() {
  const [standups, setStandups] = useState(function () {
    const storedValue = localStorage.getItem("standups");
    return JSON.parse(storedValue);
  });
  const [names, setNames] = useState(defaultNames);
  const [orderSet, setOrderSet] = useState(false);
  const [breakouts, setBreakouts] = useState([]);
  const isHolidaySeason = new Date().getMonth() === 11;

  function shuffleArray() {
    const newArray = [];
    let oldArray = names;
    while (newArray.length < names.length) {
      const randomIndex = Math.floor(Math.random() * oldArray.length);
      const randomName = oldArray[randomIndex];
      newArray.push(randomName);
      oldArray = oldArray.filter((name) => name != oldArray[randomIndex]);
    }
    setNames(newArray);
    setOrderSet(true);
    setStandups([]);
  }

  function addBreakout(breakout) {
    if (breakouts.includes(breakout)) return;
    setBreakouts([...breakouts, breakout]);
  }

  function addStandup(newStandup) {
    setStandups([...standups, newStandup]);
    localStorage.setItem("storageDate", Date.now());
  }

  function addNewName(name) {
    setNames([...names, name]);
  }

  function moveNameToBottom(nameString) {
    const newNamesArray = names.filter((name) => name != nameString);
    setNames([...newNamesArray, nameString]);
  }

  useEffect(
    function () {
      localStorage.setItem("standups", JSON.stringify(standups));
    },
    [standups]
  );

  // Clear storage after 12 hours
  useEffect(function () {
    const currentStoredDate = localStorage.getItem("storageDate");
    const expirationTime = 12 * 60 * 60 * 1000; // 12 hours
    if (Date.now() - currentStoredDate >= expirationTime) {
      localStorage.clear();
    }
  }, []);

  return (
    <div className="App">
      <Header>
        <h3>{niceDateString}</h3>
      </Header>
      {isHolidaySeason && (
        <TempHeader
          title="🎁❄️ Happy Holidays 🎄⛄️"
          bgColor="#B41204"
          bgImage="https://www.shutterstock.com/image-photo/copyspace-text-concept-christmas-new-260nw-2423952547.jpg"
        />
      )}

      {!orderSet && (
        <button className="button" onClick={shuffleArray}>
          {!standups ? `Get Standup Order` : "New standup"}
        </button>
      )}
      {orderSet && (
        <>
          <StandupList
            names={names}
            onAddStandup={addStandup}
            onSetLast={moveNameToBottom}
            onAddBreakout={addBreakout}
          />
          <AddTeamMember onAddName={addNewName} names={names} />

          <h1>Standup notes</h1>
          <h3>{niceDateString}</h3>
          {breakouts.length > 0 && <Breakout breakouts={breakouts} />}
        </>
      )}
      {standups &&
        standups.map((standup) => (
          <li className="standup-notes">
            <strong>{standup.personName}</strong>: {standup.message}
          </li>
        ))}
    </div>
  );
}

function Breakout({ breakouts }) {
  return (
    <div className="breakouts">
      <h3>Breakouts needed by:</h3>
      {breakouts.map((breakoutName) => (
        <li>{breakoutName} </li>
      ))}
    </div>
  );
}
