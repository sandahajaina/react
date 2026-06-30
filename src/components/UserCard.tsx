import { useState } from "react";

export interface UserCardProps {
    username: string;
    age: number;
    city: string;
    online: boolean;
}

function UserCard({username, age, city, online}: UserCardProps) {

    const [isLiked, setIsLiked] = useState(false);

    return (
        <div>
            <h3>{username}</h3>
            <p>{age} ans • {city} </p>
            {online ? <p>🟢 En ligne</p> : <p>⚫ Hors ligne</p>}
            <button onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? "❤️ Liké" : "🤍 Liker"}
            </button>
        </div>
    );
}

export default UserCard;