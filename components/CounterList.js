import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {animals.map((animal) => {
          return (
            <Counter
              key={animal.id}
              animalName={animal.name}
              count={animal.count}
              id={animal.id}
              onAdd={handleAdd}
              onSubtract={handleSubtract}
            />
          );
        })}
      </List>
    </>
  );
}
