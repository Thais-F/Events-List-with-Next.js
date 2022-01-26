import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/events/EventList";
import ResultsTitle from "../../../components/events/results-title";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";

function EventsbyDate() {
  const router = useRouter();

  const slug = router.query.slug;

  if (!slug) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +slug[0];
  const numMonth = +slug[1];

  console.log(numYear);
  console.log(numMonth);

  if (isNaN(numYear) || isNaN(numMonth)) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const dateFilter = {
    year: numYear,
    month: numMonth,
  };

  const events = getFilteredEvents(dateFilter);

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen date!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </Fragment>
  );
}

export default EventsbyDate;
