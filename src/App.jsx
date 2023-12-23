import './App.css'
import { useSelector, useDispatch } from 'react-redux' 
import { dataFetching, fetchDatafunction } from './redux/action'

function App() {

  const data = useSelector((store)=>store.data)

  const dispatch = useDispatch()

  const getData = ()=>{
    dispatch(dataFetching())
  }
  
  return (
    <>
<button onClick={getData}>GetData</button>
{data.map((e)=>{
  return <div key={e.id}>
    <h1>{e.name}</h1>
    <h4>{e.email}</h4>
    <hr/>
  </div>
})}

    </>
  )
}

export default App