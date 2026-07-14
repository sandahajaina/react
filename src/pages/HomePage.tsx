import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';
import type { UserCardProps } from '../components/UserCard';
import { useEffect, useState } from 'react';

interface AppUser extends UserCardProps {
    id: number;
}

interface ApiUser {
    id: number;
    name: string;
    username: string;
    address: {
        city: string;
    };
}

function HomePage () {

const [users, setUsers] = useState<AppUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);          
        }

        const data: ApiUser[] = await response.json();

        const formattedUsers: AppUser[] = data.map(user => ({
              id : user.id,
              username: user.username,
              age: Math.floor(Math.random() * 30) + 18,
              city: user.address.city,
              online : Math.random() > 0.5
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
}, []);

  return (
    <div>
        {isLoading
          ? <p>Chargement des profils...</p>
          : users.map(user => <UserCard key={user.id} {...user} />)
        }
        <Link to="/login">Register</Link>
        <Link to="/register">Se connecter</Link>
    </div>
  )
}

export default HomePage;