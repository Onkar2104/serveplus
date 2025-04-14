import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt vel excepturi, sequi necessitatibus dignissimos? Velit repudiandae est maiores atque architecto aspernatur tempore cumque odio commodi nemo laborum, id voluptatibus?</p>
  )
}

export default App
