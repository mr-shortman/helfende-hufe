import React from "react";
import {
  PageBlocksEvent,
  PageBlocksEventEventList,
  PageBlocksEventEventListFilter,
} from "../../../../tina/__generated__/types";
import RichText from "@/components/richtext";
import Header from "@/components/header";

interface Props {
  data: PageBlocksEvent;
}

const EventCard = ({
  image,
  title,
  description,
  date,
}: PageBlocksEventEventList) => {
  return (
    <div className="w-full max-w-xs flex flex-col p-4 rounded-md bg-muted gap-4 justify-between">
      {image ? (
        <img src={image} alt="" />
      ) : (
        <div className="w-full h-64 bg-muted-foreground rounded-md"></div>
      )}
      <div className="flex flex-col">
        <span className="text-sm text-muted-foreground">{date}</span>
        <h5 className="text-2xl font-bold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

function Event({ data }: Props) {
  const { title, description, eventList } = data as PageBlocksEvent;
  return (
    <div className="flex  flex-col gap-4 ">
      {/* Header */}
      <div className="flex flex-col max-w-3xl gap-2">
        <Header text={`${title}`} />
        <RichText content={description} />
      </div>

      {/* EventList */}
      <div className="flex flex-wrap gap-5">
        {eventList?.map((event, idx) => (
          <EventCard {...event} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Event;
