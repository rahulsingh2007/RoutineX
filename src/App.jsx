import { useTheme } from './context/useTheme';
import Navbar from './Navbar';
import Header from './Components/Header';
import TotalHabits from './Components/TotalHabits';
import TotalCompletion from './Components/TotalCompletion';
import MaxStreak from './Components/MaxStreak';
import AddNewHabit from './Components/AddNewHabit';
import FilterRow from './Components/FilterRow';
import HabitShow from './Components/HabitShow';

const App = () => {
  const { isDark } = useTheme();
  return (
    <>
      <Navbar />
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 flex flex-col items-center transition-colors duration-300 ${isDark ? 'bg-[#0F172B] text-white' : 'bg-linear-to-br from-slate-50 via-indigo-50/40 to-violet-50/30 text-slate-900'
        }`}>
        <div className="w-full max-w-5xl flex flex-col items-start">
          <Header />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <TotalHabits />
            <TotalCompletion />
            <MaxStreak />
          </div>
          <AddNewHabit />
          <div className='flex flex-col sm:flex-row gap-3 mt-7 w-full sm:w-auto'>
            <FilterRow />
          </div>
          <div>
            <HabitShow />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
