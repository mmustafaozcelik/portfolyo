import React from "react";
import AppHero from "../compoments/home/hero";
import AppAbout from "../compoments/home/about";
import AppWorks from "../compoments/home/work";
import AppComment from "../compoments/home/comment";
import AppCommentAdd from "../compoments/home/commentAdd";
import AppContact from "../compoments/home/contact";

function AppHome(){
    return(
        <div className="main">
            <AppHero/>
            <AppAbout/>
            <AppWorks/>
            <AppComment/>
            <AppCommentAdd/>
            <AppContact/>
        </div>
    );
}
export default AppHome;