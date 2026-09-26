import Logo from './assets/favicon.svg'
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./context/useTheme";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <div className={`flex flex-row items-center justify-between px-5 py-3 sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${isDark
                ? 'bg-[#0F171F] border-[#1E293B]'
                : 'bg-white/90 border-slate-200'
            }`}>
            <div className='flex flex-row items-center gap-2 cursor-pointer select-none'>
                <img src={Logo} alt="RoutineX" className='w-9' />
                <p className={`text-xl font-bold tracking-tight transition-colors duration-200 ${isDark ? 'text-white' : 'text-slate-900'}`}>RoutineX</p>
            </div>

            <button
                onClick={toggleTheme}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`
                    relative flex items-center justify-center w-10 h-10 rounded-xl border
                    transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm cursor-pointer
                    ${isDark
                        ? 'bg-[#1E293B] border-[#334155] text-amber-400 hover:bg-[#273548] hover:border-[#4F39F6] hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]'
                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]'
                    }
                `}
            >
                <span className={`absolute transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}>
                    <Sun size={18} />
                </span>
                <span className={`absolute transition-all duration-300 ${isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>
                    <Moon size={18} />
                </span>
            </button>
        </div>
    )
}

export default Navbar