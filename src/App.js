import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";





function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wr">
        <Header />
        <Navbar  />
        <div className="app-wr-content">
          <Routes>
            <Route path="/Dialogs" 
              element={<Dialogs 
              dialogs={props.state.dialogPage.dialog} 
              massages={props.state.dialogPage.messages} />}/> 
            <Route path="/Profile"
               element={<Profile
               profilePage={props.state.profilePage} 
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost} />}/>
            <Route path="/News" 
              element={<News/>}/>
            <Route path="/Music" 
              element={<Music/>}/>
            <Route path="/Settings" 
              element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
