import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleDeleteAll() {
    const confirmed = window.confirm('Are you sure you want to delete all the items?');
    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
