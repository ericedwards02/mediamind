import { ScrollArea } from "./ui/scroll-area";
import type { Entry } from "../types";
import { Card } from "./ui/card";

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

const EntryCard = ({ entryData }: { entryData: Entry }) => {
  return (
    <Card className="bg-white sm:w-[800px] not-sm:w-full sm:rounded-3xl px-7 py-3 flex flex-col place-self-center">
      <h1 className="text-xl font-bold">{entryData.title}</h1>
      <h1>
        medium: <span className="italic">{entryData.mediaType}</span>
      </h1>
      <h1>
        log date: <span className="">{formatDate(entryData.date)}</span>
      </h1>
      {entryData.review && (
        <ScrollArea className="rounded-base h-[250px] max-w-[500px] text-text border-2 border-border dark:border-darkBorder bg-slate-300 p-4 mt-3 shadow-light dark:shadow-dark">
          <h2 className="font-bold">review:</h2>
          &nbsp;{entryData.review}
        </ScrollArea>
      )}
      {entryData.quickThought && (
        <h1>
          quick thought:{" "}
          <span className="italic">{entryData.quickThought}</span>
        </h1>
      )}
      {entryData.quote && (
        <h1>
          quote: <span className="italic">{entryData.quote}</span>
        </h1>
      )}
      {entryData.rating && (
        <h1>
          rating: <span className="italic">{entryData.rating}</span>
        </h1>
      )}
      {(entryData.lists || entryData.related) && <div className="m-4" />}
      {/* relationship entries (footer properties) */}
      {entryData.lists && (
        <h1>
          <span className="font-bold">sub-entry of: </span>
          {entryData.lists}
        </h1>
      )}
      {entryData.related && (
        <h1>
          <span className="font-bold">related entries: </span>
          {entryData.related}
        </h1>
      )}
    </Card>
  );
};

export default EntryCard;
