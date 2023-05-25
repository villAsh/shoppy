export default function Shimmer() {
  return (
    <div className="w-full sm:h-[60vh] border border-slate-200 shadow rounded-md flex flex-col">
      <div className="animate-pulse sm:mx-2 sm:mt-2 bg-slate-200">
        <div className="w-auto sm:h-[30vh]">
        </div>
      </div>
      <div className="sm:h-[4vh] bg-slate-200 animate-pulse sm:mx-2 sm:mt-2">
        <div className="w-auto">
        </div>
      </div>
      <div className="sm:h-[3vh] bg-slate-200 animate-pulse sm:mx-2 sm:mt-2 sm:w-[20vw]">
        <div className="w-auto">
        </div>
      </div>
      <div className="sm:h-[3vh] bg-slate-200 animate-pulse sm:mx-2 sm:my-5 sm:w-[15vw]">
        <div className="w-auto">
        </div>
      </div>
      <div className="sm:h-[5vh] bg-slate-200 animate-pulse mx-auto sm:mt-2 sm:w-[15vw] rounded-lg">
        <div className="w-auto">
        </div>
      </div>
    </div>
  );
}
