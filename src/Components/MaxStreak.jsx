import { Flame } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const MaxStreak = () => {
    const { isDark } = useTheme();
    return (
        <div className={`border rounded-2xl p-6 flex items-start justify-center gap-4 w-full shadow-sm ${isDark
                ? 'bg-[#1D293D] border-[#314158]'
                : 'bg-white border-orange-100 shadow-orange-100/50'
            }`}>
            <div className={`p-3 rounded-xl ${isDark ? 'text-[#F97316] bg-[#0F172B]' : 'text-orange-500 bg-orange-50'}`}>
                <Flame size={22} strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
                <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? 'text-[#475569]' : 'text-slate-400'}`}>
                    Max Streak
                </span>
                <span className={`text-4xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>0d</span>
            </div>
        </div>
    )
}

export default MaxStreak