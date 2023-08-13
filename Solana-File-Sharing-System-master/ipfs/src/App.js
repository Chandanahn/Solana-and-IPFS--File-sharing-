import './App.css'
import { useState } from 'react'
import { create } from 'ipfs-http-client'

const client = create('http://127.0.0.1:5001/webui')

function App() {
  const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `http://127.0.0.1:5001/webui${added.path}`
      updateFileUrl(url)
      console.log(url)
      console.log(added.path)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  return (
    <div className="App">
      <h1>IPFS Example 2</h1>
      <input
        type="file"
        onChange={onChange}
      />
      {
        fileUrl && (
          <img src={fileUrl} width="600px" />
        )
      }
    </div>
  );
}



// Hello world//

export default App