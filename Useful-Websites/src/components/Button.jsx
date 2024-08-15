export default function Button ({name,link}){
    return (
        <div>
        <a href={link} target={"_blank"}>
        <button className='bg-green-400 text-lg text-white p-5 m-2 rounded-2xl 
        size-auto'>{name}</button>
        </a>
      </div>
    )
}   