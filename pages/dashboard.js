import Layout from "../src/components/Layout/Layout";
import EventCard from "../src/components/EventCard";
import EventListItem from "../src/components/EventListItem";

const dummyEvents = [
  {
    id: "58493db9691ecc0d3da51bfd",
    title: "Awesome event",
    description: "A bunch of people doing awesome stuff",
    startsAt: "2016-12-08T10:46:33.901Z",
    capacity: 50,
    owner: {
      id: "58493e0b691ecc0d3da51bfe",
      firstName: "Robert",
      lastName: "Rossmann",
      email: "robert.rossmann@strv.com",
      createdAt: "2016-12-08T10:46:33.901Z",
      updatedAt: "2016-12-08T10:46:33.901Z"
    },
    attendees: [
      {
        id: "58493e0b691ecc0d3da51bfe",
        firstName: "Robert",
        lastName: "Rossmann",
        email: "robert.rossmann@strv.com",
        createdAt: "2016-12-08T10:46:33.901Z",
        updatedAt: "2016-12-08T10:46:33.901Z"
      }
    ],
    createdAt: "2016-12-08T10:46:33.901Z",
    updatedAt: "2016-12-08T10:46:33.901Z"
  }
];

export default () => (
  <Layout className="Dashboard" type={Layout.Type.light}>
    <h2>DashBoard</h2>
    <section>
      <div className="container">
        <EventCard {...dummyEvents[0]} />
      </div>
    </section>

    <section>
    <div className="container">
      <EventListItem {...dummyEvents[0]} />
    </div>
  </section>
  </Layout>
);
