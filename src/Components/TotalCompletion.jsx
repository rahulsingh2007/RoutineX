import { CircleCheck } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const TotalCompletion = ({ habits }) => {
    const { isDark } = useTheme();
    return (
        <div className={`border rounded-2xl p-6 flex items-start justify-center gap-4 w-full shadow-sm ${isDark
            ? 'bg-[#1D293D] border-[#314158]'
            : 'bg-white border-emerald-100 shadow-emerald-100/50'
            }`}>
            <div className={`p-3 rounded-xl ${isDark ? 'text-[#10B981] bg-[#0F172B]' : 'text-emerald-500 bg-emerald-50'}`}>
                <CircleCheck size={22} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
                <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? 'text-[#475569]' : 'text-slate-400'}`}>
                    Today's Completion
                </span>
                <span className={`text-4xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>0%</span>
                <span className={`text-xs mt-1 ${isDark ? 'text-[#475569]' : 'text-slate-400'}`}>0 of {habits.length} done</span>
            </div>
        </div>
    )
}

export default TotalCompletion