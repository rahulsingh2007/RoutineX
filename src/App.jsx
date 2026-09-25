import { CircleCheck, Flame, LayoutList } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-[#0F172B] min-h-screen text-[#FFFFFF] p-8">
      <h1 className="text-4xl font-bold tracking-tight">Habit Tracker</h1>
      <p className="text-[#64748B] text-sm font-medium mt-1 mb-8">Friday, September 25</p>

      <div className="flex flex-wrap gap-4 max-w-5xl">
        <div className="bg-[#1D293D] border border-[#314158] rounded-2xl p-6 flex items-start justify-center gap-4 w-55">
          <div className="text-[#6366F1] bg-[#0F172B] p-3 rounded-xl">
            <LayoutList size={22} strokeWidth={2} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#475569] text-xs font-bold tracking-widest uppercase">Total Habits</span>
            <span className="text-4xl font-semibold tracking-tight text-slate-100">0</span>
          </div>
        </div>

        <div className="bg-[#1D293D] border border-[#314158] rounded-2xl p-6 flex items-start justify-center gap-4 w-55">
          <div className="text-[#10B981] bg-[#0F172B] p-3 rounded-xl">
            <CircleCheck size={22} strokeWidth={2} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#475569] text-xs font-bold tracking-widest uppercase">Today's Completion</span>
            <span className="text-4xl font-semibold tracking-tight text-slate-100">0%</span>
            <span className="text-[#475569] text-xs mt-1">0 of 0 done</span>
          </div>
        </div>

        <div className="bg-[#1D293D] border border-[#314158] rounded-2xl p-6 flex items-start justify-center gap-4 w-55">
          <div className="text-[#F97316] bg-[#0F172B] p-3 rounded-xl">
            <Flame size={22} strokeWidth={2} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#475569] text-xs font-bold tracking-widest uppercase">Max Streak</span>
            <span className="text-4xl font-semibold tracking-tight text-slate-100">0d</span>
          </div>
        </div>
      </div>

      <div className='bg-[#1D293D] border border-[#314158] rounded-2xl w-173 mt-7 p-6'>
        <p>Add New Habit</p>
      </div>
    </div>
  )
}

export default App;
