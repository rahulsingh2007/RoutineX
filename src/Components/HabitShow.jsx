import { useTheme } from '../context/useTheme';

const HabitShow = () => {
    const { isDark } = useTheme();
    return (
        <div>
            <p className={`text-xs mt-2 ${isDark ? 'text-[#626B6B]' : 'text-slate-400'}`}>0 habits shown</p>
        </div>
    )
}

export default HabitShow