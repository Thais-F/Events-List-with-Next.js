import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((e) => (
        <EventItem
          key={e.id}
          title={e.title}
          image={e.image}
          date={e.date}
          location={e.location}
          id={e.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
