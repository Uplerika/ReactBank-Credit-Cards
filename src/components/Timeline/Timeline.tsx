import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";

interface TimelineProps {
  items: {
    id: number;
    title: string;
    date: number;
    amount: number;
    currency: "RUB" | "USD" | "EUR" | "GBP";
  }[];
}
const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div>
      {items.map((operation) => (
        <TimelineItem key={operation.id} {...operation} />
      ))}
    </div>
  );
};

export default Timeline;
