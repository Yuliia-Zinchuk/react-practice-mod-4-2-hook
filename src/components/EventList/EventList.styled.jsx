import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
  gap: 15px;
`;

export const Event = styled.li`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 1px 1px 3px 3px rgba(58, 19, 214, 0.66);
  width: calc((100% - 45px) / 4);
  border-radius: 4px;
  gap: 5px;
  background-color: #fff;
`;

export const EventName = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #3636bb;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  display: block;
  color: #ffffff;
  background-color: #3636bb;
  border: none;
  border-radius: 2px;
  padding: 5px 10px;
  margin: 10px auto;
  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: rgba(58, 19, 214, 0.66);
    box-shadow: 3px 3px 4px 0px rgba(58, 19, 214, 0.66);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
`;

export const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
