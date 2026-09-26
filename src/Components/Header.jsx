import { useTheme } from '../context/useTheme';

const Header = () => {
    const { isDark } = useTheme();
    return (
        <div>
            <h1 className={`text-3xl sm:text-4xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>
                Habit Tracker
            </h1>
            <p className={`text-sm font-medium mt-1 mb-8 ${isDark ? 'text-[#64748B]' : 'text-slate-400'}`}>
                Friday, September 25
            </p>
        </div>
    )
}

export default Header