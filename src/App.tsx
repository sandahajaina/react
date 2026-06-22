import './App.css'
import UserCard from './components/UserCard';

function App() {

  return (
    <div>
        <UserCard username='coco_loco' age={22} city="Paris" online={true}/>
        <UserCard username='aya' age={25} city="Tana" online={false}/>
        <UserCard username='bigga' age={32} city="Yaounde" online={true}/>
    </div>
  )
}

export default App