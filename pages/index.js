import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <div className="center">
        <h1>Featured Events</h1>
      </div>
      <EventList events={featuredEvents} />
    </>
  );
}

export default HomePage;
