import PersonStandup from "./PersonStandup";
import { Emoji } from "../../emojiLists";

const emoji = new Emoji();

function StandupList({ names, onAddStandup, onSetLast, onAddBreakout }) {
  return (
    <div className="standup-list">
      {names.map((name) => (
        <PersonStandup
          name={name}
          a
          key={name}
          onAddStandup={onAddStandup}
          onSetLast={onSetLast}
          onAddBreakout={onAddBreakout}
        />
      ))}
    </div>
  );
}

export default StandupList;
