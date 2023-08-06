import { useState } from 'react'
import {utils, writeFile} from "xlsx"

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  let data = [['Nazwa', 'czynnosc']]

  const handleGenerate = () => {
  
    for(let i = 0; i < count; i++) {
      console.log('jestem tu')
      data.push(["dupa", "sex"])
    }
  
    console.log(data)
    let workbook = utils.book_new();
    workbook.SheetNames.push("First")
    workbook.Sheets["First"] = utils.aoa_to_sheet(data)

    writeFile(workbook, "demo.xlsx")
  }

  return (
    <>
      <div className='w-full h-[100vh] bg-white'>
        <div className='max-w-[1250px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p>Wprowadź ilość:</p>
          <input type='number' className='border rounded-md w-[300px] mx-auto my-4 py-4 px-2' onChange={e => { setCount(e.target.value)}} />
          <button className='bg-red-500 w-[300px] mx-auto py-4 px-2 rounded-md text-white font-bold' onClick={handleGenerate}>Generuj</button>
        </div>
      </div>
    </>
  )
}

export default App
