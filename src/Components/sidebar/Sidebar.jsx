import React, { useContext, useState,useEffect } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts,newChat, setRecentPrompt } = useContext(Context);
  const [theme,setdarktheme]=useState('light-theme')
  const toggletheme=()=>
  {
      if(toggletheme==='dark-theme')
      {
          setdarktheme('light-theme')
      }
      else
      {
          setdarktheme('dark-theme')
      }
  }
  useEffect(()=>{
  
      document.body.className=theme;
  },[theme]);

const loadPrompt = async (promt) =>
{
  setRecentPrompt(prompt)
  await onSent(prompt)
}


  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {
            prevPrompts.map((item, index) => {
              return(

                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,18)}...</p>
              </div>
              )
            
            })}
          </div>
        ) : null}
      </div>
      
      <div className="bottom">
      <div className="botton-item recent-entry">
        <button  className="dark-theme" onClick={()=>toggletheme()}>◐</button>
          {extended ? <p> Dark Theme</p> : null}
        </div>
        <div className="botton-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="botton-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="botton-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
