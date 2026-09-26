import { CirclePlus } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const AddNewHabit = () => {
    const { isDark } = useTheme();
    return (
        <div className={`border rounded-2xl w-full mt-7 p-6 shadow-sm ${isDark
                ? 'bg-[#1D293D] border-[#314158]'
                : 'bg-white border-slate-200 shadow-slate-100/60'
            }`}>
            <p className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>Add New Habit</p>
            <div className='w-full flex flex-col'>
                <input
                    type="text"
                    placeholder="e.g. Morning run, Read 20 pages..."
                    className={`mt-4 border-2 rounded-xl placeholder:font-medium focus:outline-none px-3 py-2 w-full transition-colors duration-200 ${isDark
                            ? 'bg-[#0F172B] border-[#314158] placeholder-[#62748E] focus:border-indigo-600 text-white'
                            : 'bg-slate-50 border-slate-200 placeholder-slate-400 focus:border-indigo-400 focus:bg-white text-slate-800 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]'
                        }`}
                />
                <p className={`text-xs self-end mt-1 ${isDark ? 'text-[#50748E]' : 'text-slate-400'}`}>0/30</p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 w-full mt-3'>
                <select className={`border-2 rounded-xl px-3 py-2 focus:outline-none transition-colors duration-200 w-full ${isDark
                        ? 'bg-[#0F172B] border-[#314158] focus:border-indigo-600 text-white'
                        : 'bg-slate-50 border-slate-200 focus:border-indigo-400 text-slate-700 focus:bg-white'
                    }`}>
                    <option value="Health">Health</option>
                    <option value="work">Work</option>
                    <option value="Mind">Mind</option>
                    <option value="Other">Other</option>
                </select>
                <button className={`flex items-center justify-center gap-1.5 font-semibold text-sm transition-all duration-200 px-5 py-2 rounded-xl cursor-pointer ${isDark
                        ? 'bg-[#4F39F6] hover:bg-[#615FFF] text-white shadow-[0_4px_15px_rgba(79,57,246,0.4)] hover:shadow-[0_4px_20px_rgba(79,57,246,0.6)]'
                        : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.5)]'
                    }`}>
                    <CirclePlus size={17} strokeWidth={2} /> Add
                </button>
            </div>
        </div>
    )
}

export default AddNewHabit