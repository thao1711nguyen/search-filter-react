import { useState } from 'react';



export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }, 
    { id: 4, name: 'John Doe' }, 
    { id: 5, name: 'Smith' }, 
    { id: 6, name: 'Liz' }, 
    { id: 7, name: 'Mia' }, 
  ]
  const [filteredUsers, setFilteredUsers] = useState(users);
  function handleSearch(event) {
    setSearchTerm(event.target.value); 
    const searchTerm = event.target.value.toLowerCase();
    const searchUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
    setFilteredUsers(searchUsers);
  }

  return (
    <div>
      <input type="text" 
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}
