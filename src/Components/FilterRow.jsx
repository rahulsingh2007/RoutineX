import { useTheme } from '../context/useTheme';

const FilterRow = () => {
    const { isDark } = useTheme();
    return (
        <>
            <div className={`flex flex-wrap gap-1 w-fit sm:w-auto py-1 px-1 rounded-lg border ${isDark
                    ? 'bg-[#1D293D] border-[#314158] text-[#8C9FB9]'
                    : 'bg-white border-slate-200 text-slate-500 shadow-sm'
                }`}>
                <button className={`rounded-md px-3 py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${isDark
                        ? 'bg-[#4F39F6] text-white'
                        : 'bg-indigo-500 text-white shadow-sm'
                    }`}>All</button>
                <button className={`rounded-md px-3 py-1 text-sm font-medium transition-colors duration-200 hover:bg-opacity-80 cursor-pointer ${isDark
                        ? 'hover:bg-[#273548] text-[#8C9FB9]'
                        : 'hover:bg-indigo-50 text-slate-500 hover:text-indigo-600'
                    }`}>Completed</button>
                <button className={`rounded-md px-3 py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${isDark
                        ? 'hover:bg-[#273548] text-[#8C9FB9]'
                        : 'hover:bg-indigo-50 text-slate-500 hover:text-indigo-600'
                    }`}>Pending</button>
            </div>

            <div>
                <select className={`border-2 rounded-xl px-3 py-2 focus:outline-none transition-colors duration-200 ${isDark
                        ? 'bg-[#1D293D] border-[#314158] focus:border-indigo-600 text-white'
                        : 'bg-white border-slate-200 focus:border-indigo-400 text-slate-700 shadow-sm'
                    }`}>
                    <option value="All Categories">All Categories</option>
                    <option value="Health">Health</option>
                    <option value="work">Work</option>
                    <option value="Mind">Mind</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </>
    )
}

export default FilterRow