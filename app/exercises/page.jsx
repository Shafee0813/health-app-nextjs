import { exercises } from "../../constants"
const page = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-[900px] rounded-xl items-center">
        <h1 className="m-6 text-3xl font-bold text-green-500">
        Exercises
        </h1>
      <div className="flex flex-wrap justify-center">
        {exercises.map((exercise) => (      
          <div className='w-[250px] p-4 border-[0.5px] border-green-500 m-4 hover:bg-green-600 shadow-md rounded-xl shadow-green-600' key = {exercise.name} >
          <h1 className='text-2xl font-bold'>{exercise.name}</h1>
            <p className="text-sm text-red-400">{exercise.tag}</p>
            <ul className="flex flex-wrap">
              Targets : 
              {exercise.targetMuscles.map((muscle,index) => (
                <li className="text-small text-green-100" key = {index}>{muscle},</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default page