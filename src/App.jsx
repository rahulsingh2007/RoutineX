import { useTheme } from './context/useTheme';
import Navbar from './Navbar';
import Header from './Components/Header';
import TotalHabits from './Components/TotalHabits';
import TotalCompletion from './Components/TotalCompletion';
import MaxStreak from './Components/MaxStreak';
import AddNewHabit from './Components/AddNewHabit';
import FilterRow from './Components/FilterRow';
import HabitShow from './Components/HabitShow';
import { useState } from 'react';

const App = () => {
  const { isDark } = useTheme();
  const [habits, setHabits] = useState([]);
  const addHabit = (name, category) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name: name,
      category: category,
      streak: 0,
      isCompletedToday: false
    };
    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }
  const deleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };
  const toggleHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === id) {
          const nextCompletedState = !habit.isCompletedToday;
          return {
            ...habit,
            isCompletedToday: nextCompletedState,
            streak: nextCompletedState ? habit.streak + 1 : Math.max(0, habit.streak - 1),
          };
        }
        return habit;
      }));
  };

  console.log(habits);

  return (
    <>
      <Navbar />
      <div className={`min-h-screen p-4 sm:p-6 lg:p-8 flex flex-col items-center transition-colors duration-300 ${isDark ? 'bg-[#0F172B] text-white' : 'bg-linear-to-br from-slate-50 via-indigo-50/40 to-violet-50/30 text-slate-900'
        }`}>
        <div className="w-full max-w-5xl flex flex-col items-start">
          <Header />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <TotalHabits habits={habits} />
            <TotalCompletion habits={habits} />
            <MaxStreak />
          </div>
          <AddNewHabit addHabit={addHabit} />
          <div className='flex flex-col sm:flex-row gap-3 mt-7 w-full sm:w-auto'>
            <FilterRow />
          </div>
          <div className="w-full">
            <HabitShow habits={habits} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
