import React from "react";
import { BackTop } from 'antd';

function AppFooter() {

    return(
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-laptop-code"></i>
                    <a href="www.google.com">MEHMET MUSTAFA ÖZÇELİK</a>
                </div>
                <div className="copyrigt">MEHMET MUSTAFA ÖZÇELİK &copy;2021 </div>
                 <BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>
        </div>
    );
}

export default AppFooter;