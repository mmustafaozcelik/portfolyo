import React from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import AppHeader from './compoments/common/header';
import AppFooter from './compoments/common/footer';
import AppHome from './views/home';
const { Header,Content,Footer } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/> 
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
  </Layout>
  );
}

export default App;
