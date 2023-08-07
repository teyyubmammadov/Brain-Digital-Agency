import React, {useState, useEffect} from 'react'
import Worker from './Worker'
import WorkersInfo from './jsons/workers.json'


const Workers = () => {

    const [infolar , setInfolar] = useState(null)

    useEffect(()=>{
        fetch("./src/components/jsons/workers.json")
        .then(response=>response.json())
        .then(WorkersInfo=>setInfolar(WorkersInfo))
    }, [])

  return (
    <div className="kart">
<div className="container">
    <div className="comando-top-side">
        <h1 className='text-white text-center mb-2'>İcra komandası</h1>
    </div>
    <div className="row justify-content-around">
        
        {
           infolar && infolar.map(info=>(
            <Worker workerImg={info.worker_img} workerName={info.worker_name} workerRank={info.worker_rank} workerMedia={info.worker_media} />
           ))
        }

    </div>
</div>
    </div>
  )
}

export default Workers