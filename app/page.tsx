import EventCard from '@/components/EventCard';
import ExploreButton from '@/components/ExploreButton';
import { events } from '@/lib/constants';

const HomePage = () => {
  return (
    <section>
      <h1 className="mb-4 text-center text-4xl font-bold">
        The hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center">
        Join us for an exciting lineup of events designed for developers of all levels.
      </p>

      <ExploreButton />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event, index) => (
            <li key={index}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default HomePage;
