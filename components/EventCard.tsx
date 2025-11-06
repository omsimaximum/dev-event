import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  title: string;
  image: string;
  slug?: string;
  location?: string;
  date?: string; // YYYY-MM-DD
  time?: string; // local start time
  description?: string;
}

const EventCard = ({ title, image, slug, location, date, time, description }: IProps) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image src={image} alt={title} width={410} height={300} className="poster" />
      <div className="flex flex-row gap-2">
        <Image src={'/icons/pin.svg'} alt="Location pin icon" width={14} height={14} />
        <p>{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image src={'/icons/calendar.svg'} alt="Calendar icon" width={14} height={14} />
          <p>{date}</p>
        </div>
        <div>
          <Image src={'/icons/clock.svg'} alt="time icon" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
