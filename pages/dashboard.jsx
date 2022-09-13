import { useState, useEffect } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import DashboardSidebar from '../components/DashboardSidebar'
import Overview from '../components/Overview'
const dashboard = () => {
    const [showOverview, setShowOverview] = useState(true)
    const [showCreatePostSection, setShowPostCreateSection] = useState(false)
    const [showCreatePropertySection, setShowPropertyCreateSection] = useState(false)
    const [showEditPostSection, setShowEditPostSection] = useState(false)
    const [showEditPropertySection, setShowEditPropertySection] = useState(false)

    const toggleOverview =()=>{
        setShowOverview(true)
    }
    const toggleCreate =()=>{
        setShowPostCreateSection(true)
    }
    const toggleCreateProperty = ()=>{
        setShowPropertyCreateSection(true)
    }
    const toggleEdit =()=>{
        setShowEditPostSection(true)
    }
    const togglePropetyEdit =()=>{
        setShowEditPropertySection(true)
    }
    const closeCreateProperty = ()=>{
        setShowPropertyCreateSection(false)
    }
    const closePropetyEdit =()=>{
        setShowEditPropertySection(false)
    }
    const closeOverview =()=>{
        setShowOverview(false)
    }
    const closeCreate =()=>{
        setShowPostCreateSection(false)
    }
    const closeEdit =()=>{
        setShowEditPostSection(false)
    }
  return (
    <>
        <DashboardHeader />
        <div className="dashboard-body">
            <DashboardSidebar toggleEdit={toggleEdit} toggleCreate={toggleCreate} toggleOverview={toggleOverview} closeOverview={closeOverview} closeCreate={closeCreate} closeEdit={closeEdit} toggleCreateProperty={toggleCreateProperty} togglePropetyEdit={togglePropetyEdit} closeCreateProperty={closeCreateProperty} closePropetyEdit={closePropetyEdit} />
            <Overview showOverview={showOverview} showCreateSection={showCreatePostSection} showEditSection={showEditPostSection} showCreatePropertySection={showCreatePropertySection} showEditPropertySection={showEditPropertySection} />
        </div>
    </>
  )
}

export default dashboard