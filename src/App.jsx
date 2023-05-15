import './App.css'
import SkillList from './components/SkillList';
import Clock from './components/Clock';

function App() {
  const skills = ['JavaScript', 'React', 'Node.js'];

  return (
    <>
      <SkillList skills={skills} />
      <Clock />
    </>
  )
}

export default App
