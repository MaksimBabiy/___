import React,{useState,useEffect} from 'react';
import { Button } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import './app.scss'

const Btn = ({value,selected}) => {
  const [isVisiable, setIsVisiable] = useState(false)
  const [state, setState] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  })
  const select = []
  for (var key in selected) {
    select.push({value: selected[key]
    ,
    label: key
  })
  }
  // const [first,setFirst] = useState(0)
  // const [second,setSecond] = useState(1)
  // const [thirt,setthirt] = useState(2)
  // const [four,setFour] = useState(3)

  const [semen, setSemen] = useState()
  const [secondState, setSecondState] = React.useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    setSemen(Object.keys(selected))
  },[])
  useEffect(() => {
   
  },[])


  const handeChangeValue = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
      // [e.target.name]: props.indexOf(e.target.name),
    })
   
  };
  const handeChangeSecondValue = event => {
    console.log(event)
    setSecondState({
      [event.target.name]: event.target.value
    })

  };
  const handleChange = (e) => {
    console.log(secondState)
  }
 console.log(secondState)
  return (
    <div className="App">
  
      <Dialog open={isVisiable} onClose={() => setIsVisiable(!isVisiable)}>
      Введите значение
        <div className="dialog">
       
        <div className="dialog__inputs">
           {value.map((item,i) => {
         return (
           semen &&
          <div key={i} className="item">
          <TextField id="standard-search" name={semen[i]} defaultValue={item} type="search" style={{ width: "400px" }}  onChange={handeChangeValue}/>
          <TextField
          id="standard-select-currency"
          select
          name={semen[i]}
     
          label="Select"
          onChange={(e) => console.log(e.target)}
        >
          {select.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> 
        </div>
         )
       })
       }
       
       
       </div>
        </div>
        <Button children="Show Table Preview(Show console)" color="secondary" size="large" style={{width: '400px',margin: '0 auto'}} onClick={handleChange}/>
      </Dialog>
      <Button children="Click" color="secondary" size="large" onClick={() => setIsVisiable(!isVisiable)}/>
    </div>
  );
}

export default Btn;
