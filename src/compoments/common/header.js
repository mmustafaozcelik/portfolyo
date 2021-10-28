import React, { useState } from 'react';

import { Anchor,Drawer, Button } from "antd";

const {Link} = Anchor;

function AppHeader() {
    
        const [visible, setVisible] = useState(false);
        const showDrawer = () => {
          setVisible(true);
        };
        const onClose = () => {
          setVisible(false);
        };
    return( 
        <div className="container-fluid">
            <div className="header"> 
            <div className="logo" />
                <i className="fas fa-laptop-code"></i>
                <a href="https://www.google.com">Mehmet Mustafa Özçelik</a>
                  <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#about" title="Hakkımda" />
                        <Link href="#work" title="Yaptığım İşler" />
                        <Link href="#comment" title="Yorumlar"/>
                        <Link href="#contact" title="İletişim Bilgileri"/>
                            
                    </Anchor>
                  </div>
                  <div className="mobileVisible">
                  <Button type="primary" onClick={showDrawer}>
                       <i className="fa fa-bars"></i>
                    </Button>
                    <Drawer  placement="right" onClose={onClose} visible={visible}>
                        <Anchor targetOffset="65">
                            <Link href="#about" title="Hakkımda" />
                            <Link href="#work" title="Yaptığım İşler" />
                            <Link href="#comment" title="Yorumlar"/>
                            <Link href="#contact" title="İletişim Bilgileri"/>,
                        </Anchor>
                    </Drawer>
                    </div>
            </div>
        </div>
    );

}

export default AppHeader;