import { useTheme } from '../context/useTheme';
import { Flame, Trash } from 'lucide-react';

const HabitShow = () => {
    const { isDark } = useTheme();
    return (
        <div className='w-full'>
            <p className={`text-xs mt-3 ${isDark ? 'text-[#626B6B]' : 'text-slate-400'}`}>1 habits shown</p>
            <div className={`flex items-center gap-3 sm:gap-4 border rounded-2xl w-full mt-4 sm:mt-6 p-4 sm:p-6 shadow-sm ${isDark
                ? 'bg-[#1D293D] border-[#314158]'
                : 'bg-white border-slate-200 shadow-slate-100/60'
                }`}>
                <input type="checkbox" className="w-4 h-4 rounded-full accent-indigo-600 cursor-pointer shrink-0" />
                <div className='flex justify-between items-center w-full min-w-0 gap-2 sm:gap-4'>
                    <div className='min-w-0'>
                        <p className="font-medium truncate">Gym</p>
                        <p className={`text-xs border mt-1.5 px-2 py-0.5 rounded-2xl inline-block ${isDark ? 'text-[#00C873] bg-[#193F47] border-[#116457]' : 'text-[#00BC7D] bg-[#ECFDF5] border-[#00BC7D]'}`}>
                            Health
                        </p>
                    </div>
                    <div className='flex items-center gap-2 sm:gap-3 shrink-0'>
                        <p className='text-xs text-[#62696C] flex items-center gap-1'><Flame size={15} strokeWidth={1} />0d</p>
                        <button className='text-red-400 cursor-pointer hover:text-red-600 transition-colors p-1' aria-label="Delete habit"><Trash size={15} strokeWidth={1} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HabitShow;
