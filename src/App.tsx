import './App.css'
import UserCard from './components/UserCard';
import { UserCardProps } from './components/UserCard';
import { useEffect, useState } from 'react';

interface ApiUser {
    id: number;
    name: string;
    username: string;
    address: {
        city: string;
    };
}

function App() {

  const [users, setUsers] = useState<UserCardProps[]>([]);

  useEffect(() => {
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: ApiUser[] = await response.json();

        const formattedUsers: UserCardProps[] = data.map(user => {
            // ⬅️ À toi de construire l'objet UserCardProps ici
            // username: vient de user.username
            // age: invente une valeur (ex: Math.floor(Math.random() * 30) + 18)
            // city: vient de user.address.city
            // online: invente une valeur (ex: Math.random() > 0.5)
        });

        setUsers(formattedUsers);
    }
    fetchUsers();
}, []);

  return (
    <div>
        <UserCard username='coco_loco' age={22} city="Paris" online={true}/>
        <UserCard username='aya' age={25} city="Tana" online={false}/>
        <UserCard username='bigga' age={32} city="Yaounde" online={true}/>
    </div>
  )
}

export default App