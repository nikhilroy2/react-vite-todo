import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myForm = useRef()
  const [todo, setTodo] = useState([]);
  const submitHandle = function(event){
    event.preventDefault();
    
    setTodo(todo=> [{
      "name": myForm.current["name"].value,
      "role": myForm.current["role"].value
    },...todo])
  }
  const deleteHandle = function(name){
    setTodo(todo.filter(value=> value.name !=name))
  }
  return (
    <>
      <form action="" onSubmit={(event)=>  submitHandle(event)} ref={myForm}>
        <div className="form_group">
          <label htmlFor="" className="form_label">Name</label>
          <input type="text" name='name' className="form_control" />
        </div>

        <div className="form_group">
          <label htmlFor="" className="form_label">Role</label>
          <input type="role" name='role' className="form_control" />
        </div>
        <div className="form_group">
          <button type='reset'>Reset</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {
        todo ? <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Role</td>
          </tr>
        </thead>
        <tbody>
          {todo.map((value,index)=> <tr key={index}>
            <td>{value.name}</td>
            <td>{value.role} <span onClick={()=> deleteHandle(value.name)} style={{color: 'red'}}>Delete</span> </td>
          </tr> )}
        </tbody>
      </table> : ''
      }
      
    </>
  )
}

export default App
