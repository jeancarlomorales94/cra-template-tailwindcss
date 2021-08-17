import { HomeIcon } from '@heroicons/react/solid'

function App() {
  return (
    <div className='flex h-screen'>
      <div className="p-6 max-w-sm m-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <HomeIcon className="h-12 w-12 text-indigo-500" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">React + TailwindCSS</div>
          <p className="text-gray-500">React + TailwindCSS + Heroicons Template</p>
        </div>
      </div>
    </div>
  );
}

export default App;
