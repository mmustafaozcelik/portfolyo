import React from "react";
import {Row,Col} from 'antd';
import { Card } from "antd";
const {Meta} = Card;    

function AppWorks() {
    return(
        <div id="work" className="block work">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>YAPTIĞIM İŞLER</h2>
                    <p>Yaptığım İşler </p>
                </div>
                <Row gutter={[16, 16]}>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt='Java' src="https://i.ytimg.com/vi/HB0T0hAMk0k/mqdefault.jpg" />}
                    >
                        <Meta title="Java" />
                    </Card>
                </Col>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="Python" src="https://muhendisbilir.com/wp-content/uploads/2017/09/programlama-dilleri-python.jpg" />}
                    >
                        <Meta title="Python" />
                    </Card>
                </Col>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="C" src="https://ocfeducation.com/wp-content/uploads/2021/07/C-programming-language-rises-amid-COVID-19.jpg" />}
                    >
                        <Meta title="C" />
                    </Card>
                </Col>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="Php" src="https://www.infcommunity.com/wp-content/uploads/2021/05/PHP-1.jpg" />}
                    >
                        <Meta title="Php" />
                    </Card>
                </Col>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="Laravel" src="https://i1.wp.com/fatihdemirag.net/wp-content/uploads/2018/12/laravel.jpg?fit=808%2C449&ssl=1" />}
                    >
                        <Meta title="Laravel" />
                    </Card>
                    
                </Col>

                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="Css" src="https://www.mytoworld.com/wp-content/uploads/2020/10/css-nedir-678x381.png" />}
                    >
                        <Meta title="Css" />
                    </Card>
                </Col>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="React" src="https://www.mediaclick.com.tr/uploads/2018/08/1534142226_react.png" />}
                    >
                        <Meta title="React" />
                    </Card>
                </Col>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="jquery" src="https://www.bilgiyazan.com.tr/wp-content/uploads/2014/10/jquery-e%C4%9Fitimi.jpg" />}
                    >
                        <Meta title="Jquery" />
                    </Card>
                </Col>
                <Col span={8} > 
                <Card
                        hoverable
                        cover={<img alt="Selenium" src="data:image/jpeg;base64,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" />}
                    >
                        <Meta title="Selenium" />
                    </Card>
                    
                </Col>
            
                </Row>

            </div>

        </div>
    );
    
}

export default AppWorks;