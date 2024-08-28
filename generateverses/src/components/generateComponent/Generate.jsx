import { Button, Card } from "flowbite-react";
import axios from "axios";
import { useEffect, useState } from "react";
// const rest= await axios.get(`https://quran.vigorjs.me/surah/1`)

function random (){
  return Math.trunc(Math.random()*144)+1
}

export default function Generate() {

  const [alquran, setAlquran] = useState(null);
  async function fetchAlquran(){
    const res=await axios.get(`https://quran.vigorjs.me/surah/${random()}`)
    setAlquran(res.data.data)

  }
  useEffect(()=>{
    fetchAlquran()
  },[])
console.log("alquran",alquran);
  return (
  
  <div className="bg-[5e503f]">
    <div className="flex justify-center mt-[3rem] ">
    <Card className="max-w-5xl bg-[#f2f4f3] w-[800px] h-[300px]">
      {/* {console.log(this.state.alquran[0] )} */}
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {alquran && alquran.name.transliteration.id} - {alquran && alquran.name.short}
      </h5>
      <p className="text-right text-[#cfa02a]">{alquran && alquran.verses[0].text.arab}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {alquran && alquran.verses[0].translation.id}
      </p>
      <Button onClick={async()=>await fetchAlquran()} className="bg-[#22333b] text-[#f2f4f3]">
        Random Generate
        {/* <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
      </Button>
     
    </Card>
    </div>
    </div>
  )
}

