import { LayoutList } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const TotalHabits = () => {
    const { isDark } = useTheme();
    return (
        <div className={`border rounded-2xl p-6 flex items-start justify-center gap-4 w-full shadow-sm ${isDark
                ? 'bg-[#1D293D] border-[#314158]'
                : 'bg-white border-indigo-100 shadow-indigo-100/50'
            }`}>
            <div className={`p-3 rounded-xl ${isDark ? 'text-[#6366F1] bg-[#0F172B]' : 'text-indigo-500 bg-indigo-50'}`}>
                <LayoutList size={22} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
                <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? 'text-[#475569]' : 'text-slate-400'}`}>
                    Total Habits
                </span>
                <span className={`text-4xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>0</span>
            </div>
        </div>
    )
}

export default TotalHabits