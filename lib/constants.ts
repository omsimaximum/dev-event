export type EventItem = {
  image: string;
  title: string;
  slug: string;
  titleShort?: string;
  location?: string;
  date?: string; // YYYY-MM-DD
  time?: string; // local start time
  description?: string;
};

export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'React Conf 2026',
    slug: 'react-conf-2026',
    location: 'San Francisco, CA',
    date: '2026-03-10',
    time: '09:00',
    description:
      'The official React conference featuring core team updates, talks on concurrent rendering, and ecosystem showcases.',
  },
  {
    image: '/images/event2.png',
    title: 'JSConf EU 2026',
    slug: 'jsconf-eu-2026',
    location: 'Berlin, Germany',
    date: '2026-04-22',
    time: '10:00',
    description:
      'A community-driven JavaScript conference with deep dives into language features and modern tooling.',
  },
  {
    image: '/images/event3.png',
    title: 'PyCon US 2026',
    slug: 'pycon-us-2026',
    location: 'Pittsburgh, PA',
    date: '2026-05-05',
    time: '08:30',
    description:
      'The largest annual gathering for the Python community with tutorials, talks, and sprints.',
  },
  {
    image: '/images/event4.png',
    title: 'AWS re:Invent 2026',
    slug: 'aws-reinvent-2026',
    location: 'Las Vegas, NV',
    date: '2026-11-30',
    time: '09:00',
    description: 'Cloud infrastructure, architecture sessions, and hands-on labs from AWS experts.',
  },
  {
    image: '/images/event6.png',
    title: 'GitHub Universe 2026',
    slug: 'github-universe-2026',
    location: 'New York, NY & Online',
    date: '2026-09-14',
    time: '11:00',
    description:
      'GitHub’s flagship event highlighting platform updates, open-source initiatives, and community stories.',
  },
  {
    image: '/images/event6.png',
    title: 'HackMIT 2026',
    slug: 'hackmit-2026',
    location: 'Cambridge, MA',
    date: '2026-01-24',
    time: '18:00',
    description:
      'A student-organized hackathon attracting hundreds of builders to prototype and ship projects over a weekend.',
  },
];
