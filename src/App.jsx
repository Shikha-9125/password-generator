import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberallow, setnumber] = useState(false)
  const [charallow, setchar] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallow)str += "0123456789"
    if(charallow) str += "~@#$%^&*(){}[]"
    for(let i=1 ;i <=length;i++){
      let char = Math.floor(Math.random()* str.length +1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length,numberallow,charallow,setpassword])
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current ?.select();
    passwordRef.current?.SetSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberallow,charallow,passwordGenerator])

  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h1 className='text-center text-white'>Password Generator</h1>
    
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
        type="text"
        value={password}
        class="outline-none w-full py-1 px-3"
        placeholder="Password"
        readonly
        ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-05 shrink-0'>copy</button>
    </div> 
   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}
      />
     <lable>length: {length}</lable>    
    </div>
    <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={numberallow}
      id="numberInput"
      onChange={()=>{
        setnumber((prev)=>!prev);
      }}
      />
      <label htmlfor="numberInput">Numbers</label>
   </div>
   <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={charallow}
      id="charInput"
      onChange={()=>{
        setchar((prev)=>!prev);
      }}
      />
      <label
       htmlfor="charInput">Char</label>
   </div>
  </div>
</div>

     </>
  )
}

export default App