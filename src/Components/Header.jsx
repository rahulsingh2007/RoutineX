import { useTheme } from '../context/useTheme';

const Header = () => {
    const { isDark } = useTheme();
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    return (
        <div>
            <h1 className={`text-3xl sm:text-4xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>
                Habit Tracker
            </h1>
            <p className={`text-md font-medium mt-1 mb-8 ${isDark ? 'text-[#64748B]' : 'text-slate-400'}`}>
                {formattedDate}
            </p>
        </div>
    )
}

export default Header