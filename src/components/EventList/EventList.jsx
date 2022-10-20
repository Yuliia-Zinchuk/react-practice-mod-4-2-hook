import {
  List,
  Event,
  EventName,
  DeleteBtn,
  EventImg,
  Wrapper,
} from './EventList.styled';

export const EventList = ({ events, deleteEvent }) => {
  return (
    <List>
      {events.map(({ id, name, images }) => (
        <Event key={id}>
          <EventName>{name}</EventName>
          <Wrapper>
            <EventImg src={images[0].url} alt={name} width="260" />
          </Wrapper>
          <DeleteBtn
            type="button"
            onClick={() => {
              deleteEvent(id);
            }}
          >
            Delete event
          </DeleteBtn>
        </Event>
      ))}
    </List>
  );
};
