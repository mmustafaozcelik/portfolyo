import React from "react";
import { Button,Row,Col } from 'antd';
function AppContact() {
    return(
        <div id="contact" className="contact">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>İLETİŞİM</h2>
                    <p>Bena buradaki bağlanmtılardan iletişim kurabilirsiniz</p>
                </div>
                <Row gutter={[32, 16]}>
                    <Col span={6} >
                        <a href="mailto:mustafa7944@gmail.com"> 
                        <Button type="primary">E-posta Gönder</Button>
                        </a>
                        
                    </Col >
                    <Col span={6}>Telefon
                    <p>+90 000 000 00 00</p>
                    </Col  >
                    <Col span={6}>
                        <a href="https://www.linkedin.com/in/mmustafaozcelik"><Button type="primary">Linkedin</Button></a>
                    </Col  >
                     <Col span={6}>Adres
                    <p>
                    Örnek mah. Örnek sk. no:00 Şehir/İlçe   Türkiye Posta Kodu:00000
                    </p>
                    </Col  >
                    
                    

                    
                </Row>
            </div>  
        </div>
    );
}

export default AppContact;