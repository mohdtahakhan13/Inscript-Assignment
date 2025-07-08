import './App.css'
import { DataRowSection } from './components/DataRowSection/DataRowSection'
import { DataTableSection } from './components/DataTableSection/DataTableSection'
import { HeaderSection } from './components/HeaderSection/HeaderSection'
import { NavigationBarSection } from './components/Nav/NavigationBarSection'

function App() {
  

  return (
     <div
      className="flex flex-col w-full min-w-[1440px] bg-white"
      data-model-id="2:2535"
    >
      <div className="flex flex-col w-full items-start bg-slate-50">
        <NavigationBarSection />
        <DataRowSection />
        <DataTableSection />
        <HeaderSection />
      </div>
    </div>
  )
}

export default App
