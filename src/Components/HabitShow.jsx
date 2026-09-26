import { useTheme } from '../context/useTheme';
import { Flame, Trash } from 'lucide-react';

const HabitShow = ({ habits, deleteHabit, toggleHabit }) => {
    const { isDark } = useTheme();

    const getBadgeStyles = (category) => {
        const normalizedCategory = category?.toLowerCase() || 'other';
        switch (normalizedCategory) {
            case 'health':
                return isDark
                    ? 'text-[#00D486] bg-[#193F47] border-[#116457]'
                    : 'text-[#00754A] bg-[#A8E1B3] border-[#116457]';
            case 'work':
                return isDark
                    ? 'text-[#7C86E5] bg-[#28315B] border-[#393E8C]'
                    : 'text-[#2331AF] bg-[#ADB6DB] border-[#2331AF]';
            case 'mind':
                return isDark
                    ? 'text-[#7C79FF] bg-[#2E2F5B] border-[#4A398E]'
                    : 'text-[#060075] bg-[#8D92FC] border-[#0400FF]';
            case 'other':
            default:
                return isDark
                    ? 'text-[#FF9D25] bg-[#3F3A34] border-[#785624]'
                    : 'text-[#754100] bg-[#FFCC96] border-[#754100]';
        }
    };

    return (
        <div className='w-full'>
            <p className={`text-xs mt-3 ${isDark ? 'text-[#626B6B]' : 'text-slate-400'}`}>{habits.length} habits shown</p>
            <div className="flex flex-col gap-4 mt-4 sm:mt-6">
                {habits.map((habit) => (
                    <div key={habit.id} className={`flex items-center gap-3 sm:gap-4 border rounded-2xl w-full p-4 sm:p-6 shadow-sm ${habit.isCompletedToday ? (isDark ? 'bg-[#092028] border-[#05443A] text-[#5EE995]' : 'bg-emerald-50 border-slate-200 shadow-slate-100/60') : (isDark ? 'bg-[#1D293D] border-[#314158]' : 'bg-white border-slate-200 shadow-slate-100/60')}`}>
                        <input
                            type="checkbox"
                            name={habit.id}
                            checked={habit.isCompletedToday}
                            onChange={() => toggleHabit(habit.id)}
                            className="w-4 h-4 rounded-full accent-emerald-600 cursor-pointer shrink-0"
                        />
                        <div className='flex justify-between items-center w-full min-w-0 gap-2 sm:gap-4'>
                            <div className='min-w-0'>
                                <p className="font-medium truncate">{habit.name}</p>
                                <p className={`text-xs border mt-1.5 px-2 py-0.5 rounded-2xl inline-block ${getBadgeStyles(habit.category)}`}>
                                    {habit.category}
                                </p>
                            </div>
                            <div className='flex items-center gap-2 sm:gap-3 shrink-0'>
                                <p className={`text-xs flex items-center gap-1 ${habit.isCompletedToday ? 'text-[#D76828] font-bold' : 'text-[#62696C]'}`}>
                                    <Flame size={15} strokeWidth={1} />{habit.streak}d
                                </p>
                                <button
                                    onClick={() => deleteHabit(habit.id)}
                                    className='text-red-400 cursor-pointer hover:text-[#FF0000] hover:bg-[#FFE6E6] rounded-full transition-colors p-1' aria-label="Delete habit"><Trash size={15} strokeWidth={1} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HabitShow;
