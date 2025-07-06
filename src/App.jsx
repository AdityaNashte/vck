import { useState } from "react";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import AdmissionsPage from "./components/pages/AdmissionsPage";
import ContactPage from "./components/pages/ContactPage";
import CoursesPage from "./components/pages/CoursesPage";
import { BrowserRouter,  Routes, Route, Router} from 'react-router-dom'
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";


const App=() =>{
    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);

  };
    return ( 
      <>
      <BrowserRouter>
  <div className="main-layout">
        <Header/>
        <div>
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Aditya Nashte"
          studentPhotoUrl="/images/image.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <div className="content">

          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/AboutPage' element={<AboutPage/>}></Route> 
            <Route path='/AdmissionsPage' element={<AdmissionsPage/>}></Route>
            <Route path='/ContactPage' element={<ContactPage/>}></Route>
            <Route path='/CoursesPage' element={<CoursesPage/>}></Route> 
          </Routes>         
       </div> 
     <ChatbotComponent/>  
     
 <Footer/>
</div>
 </BrowserRouter>
</>
    )
 };
 export default App;