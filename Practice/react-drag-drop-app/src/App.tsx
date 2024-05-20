import { useState } from 'react';
import './App.css'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
  },
  {
    id: 'cato',
    name: 'Little Cato',
  },
  {
    id: 'kvn',
    name: 'KVN'
  }
]

function App() {
  const [characters, setCharacters] = useState(finalSpaceCharacters);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    // 불변성 지키기
    const items = Array.from(characters);
    
    // 1. 변경시키는 아이템을 배열에서 제거
    // 2. return 값으로 지워진 아이템을 잡아준다
    const [reorderedItems] = items.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItems 삽입
    items.splice(result.destination.index, 0, reorderedItems);
    setCharacters(items);
  }

  return (
    <div>
      <h1>Final Space Characters</h1>
      <DragDropContext
        onDragEnd={handleDragEnd}
      >
        <Droppable droppableId='characters'>
          {(provided) => (
            <ul 
              className='characters' 
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {
                characters.map(({id, name}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>
                              {name}
                            </p>
                          </li>
                        )}
                    </Draggable>
                  )
                })
              }
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default App
