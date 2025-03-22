import { useEffect, useState } from "react";
import type { Entry } from "../types";
import EntryCard from "./entry-card";

const mockEntryOne: Entry = {
  id: "mock-id-1",
  title: "Battle of Algiers",
  mediaType: "film",
  review: `A harrowing work of blunt, unglamorous political instruction and conviction, and one of the great pieces of armed revolutionary cinema. A claustrophobic, maze-like, and yet clear-eyed depiction of on-the-ground human suffering under brutal colonial rule as well as a thrilling, grit-textured newsreel procedural documentation of organized guerrilla resistance that’s so authentic it was studied by both left-wing and right-wing groups for possible insights into their opponents. It takes a very real, overwhelming geopolitical situation and realizes it in the POV of human eyes and ears (the constant machinery of the sound design in helicopters, loudspeakers, guns, etc vs. the wails of the people) that very effectively capture the act of witnessing, and material solidarity and ideological martyrdom that are all necessary to see the anti-imperial project through to the end.

  Obviously there is a lot of incredible detail to unpack, but the sequence that stands out is of the three Algerian women planting bombs in the French district. Up until this point in the film Pontecorvo methodically avoids humanizing the French colonists in both character and framing (reserving warmth and close-ups for the Algerian people, reducing the military to the malicious, clinical presence it historically was), but briefly in this scene, we see the evocative flashes of French civilians singing, dancing, eating, laughing; we've entered the perspective of these women as they acknowledge that, in the name of liberation, of life, they're about to slaughter. Yet Pontecorvo doesn't frame this for simplistic hypocrisy but a much more complicated, tragic acceptance inherent to the use of force and achieving political goals under violent conditions.`,
  date: new Date(2024, 1, 1),
  related: ["(Kafka on the Shore)"],
  lists: ["(phil 332 films)"],
};

const mockEntryTwo: Entry = {
  id: "mock-id-2",
  title: "Kafka on the Shore",
  quickThought: "Wth raining fish?",
  mediaType: "novel",
  related: ["(Battle of Algiers)"],
  date: new Date(2026, 3, 3),
};

const mockEntryThree: Entry = {
  id: "mock-id-3",
  title: "Zoolander",
  mediaType: "film",
  date: new Date(2025, 3, 3),
};

const mockEntryFour: Entry = {
  id: "mock-id-4",
  title: "The Godfather",
  mediaType: "film",
  date: new Date(1972, 3, 3),
};

const mockEntryFive: Entry = {
  id: "mock-id-5",
  title: "The Shawshank Redemption",
  mediaType: "film",
  date: new Date(1994, 9, 10),
};

const mockEntrySix: Entry = {
  id: "mock-id-6",
  title: "The Wind Up Bird Chronicle",
  mediaType: "book",
  date: new Date(2001, 3, 3),
};

type sortOption = "mediaType" | "date" | "title";

const BlockView = () => {
  const [sort, setSort] = useState<sortOption>("date");
  const [entries, setEntries] = useState([
    mockEntryOne,
    mockEntryTwo,
    mockEntryThree,
    mockEntryFour,
    mockEntryFive,
    mockEntrySix,
  ] as Array<Entry>);

  useEffect(() => {
    console.log(sort);
    if (sort === "title") {
      setEntries((e) => e.toSorted((a, b) => a.title.localeCompare(b.title)));
    } else if (sort === "mediaType") {
      setEntries((e) =>
        e.toSorted((a, b) => a.mediaType.localeCompare(b.mediaType)),
      );
    } else if (sort === "date") {
      setEntries((e) =>
        e.toSorted((a, b) => a.date.getTime() - b.date.getTime()),
      );
    }
  }, [sort]);

  return (
    <>
      <div id="sort-selector" aria-label="sort selection menu">
        <div className="ml-3 flex flex-row gap-3 align-items-center">
          <span className="font-bold hover:cursor-default">sort by:</span>
          <button
            onClick={() => setSort("mediaType")}
            className={`font-bold hover:underline cursor-pointer ${sort === "mediaType" && "underline"}`}
          >
            media type
          </button>
          <span className="hover:cursor-default">|</span>
          <button
            onClick={() => setSort("date")}
            className={`font-bold hover:underline cursor-pointer ${sort === "date" && "underline"}`}
          >
            date
          </button>
          <span className="hover:cursor-default">|</span>
          <button
            onClick={() => setSort("title")}
            className={`font-bold hover:underline cursor-pointer ${sort === "title" && "underline"}`}
          >
            alphabetical
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        {entries.map((entry, index) => (
          <EntryCard key={index} entryData={entry} />
        ))}
      </div>
    </>
  );
};

export default BlockView;
