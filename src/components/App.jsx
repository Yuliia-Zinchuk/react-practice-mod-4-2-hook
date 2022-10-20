// import eventsData from '../data/eventsData.json';
// import { useState, useEffect } from 'react';
// import { EventList } from './EventList/EventList';

// export const App = () => {
//   const [events, setEvents] = useState(
//     () => JSON.parse(localStorage.getItem('events')) ?? eventsData
//   );

//   useEffect(() => {
//     localStorage.setItem('events', JSON.stringify(events));
//   }, [events]);

//   const deleteEvent = eventId => {
//     setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
//   };

//   return (
//     <>
//       <EventList events={events} deleteEvent={deleteEvent} />
//     </>
//   );
// };

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'authContext/AuthContext';
import { EventList } from './EventList/EventList';
import { fetchApi } from 'fetchApi/fetchApi';
import { AuthNav } from './AuthNav/AuthNav';
// import { TestSpan } from './TestSpan/TestSpan';

export const App = () => {
  const [events, setEvents] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [page, setPage] = useState(1);

  const { isAuth } = useContext(AuthContext);

  const deleteEvent = eventId => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  const showEvents = () => {
    setIsShown(true);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (isShown) {
      fetchApi(page).then(resp =>
        setEvents(prevEvents => [...prevEvents, ...resp.data._embedded.events])
      );
    }
  }, [isShown, page]);

  return (
    <>
      <AuthNav />
      {isShown && <EventList events={events} deleteEvent={deleteEvent} />}
      {!isAuth && <p>You need authorization</p>}
      {!isShown && isAuth && (
        <>
          <img
            src="https://static-prod.adweek.com/wp-content/uploads/2018/06/Events.jpg"
            alt="Events"
          />
          <button type="button" onClick={showEvents}>
            Show events
          </button>
        </>
      )}
      {events.length > 0 && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
};
