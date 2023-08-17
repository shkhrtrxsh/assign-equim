import Image from 'next/image'
import Sidebar from './components/common/sidebar'
import RoadMap from './components/pages/roadmap'
import EditFeedback from './components/pages/editfeedback'
//import Button from '../app/components/common/button'
import Card from './components/common/card'
import Card2 from './components/common/cardroadmap'
import AddFeedback from './components/pages/addfeedback'
import AddSuggestion from './components/common/addsuggestion'
import SuggestionActive from './components/pages/suggestionsactive'
export default function Home() {
  return (
    <main className="flex h-[100%] flex-col items-center justify-between p-10 bg-slate-50">
      <div className="">
     <SuggestionActive/>
      </div>
    </main>
  )
}
