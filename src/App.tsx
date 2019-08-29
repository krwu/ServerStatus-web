import './App.css';

import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Spin } from 'antd';
import ServerRow from './ServerRow';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const [serverData, setServerData] = useState({servers: [], updated: "0"});
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    let fetchData = setInterval(() => {
      fetch('json/stats.json')
        .then(res => res.json())
        .then(data => {
          setServerData(data);
          setIsOnline(true);
          console.log(data);
        })
        .catch(e => console.log('错误:',e))
    }, 2000);
    return () => {
      clearInterval(fetchData);
    }
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header>
          <div className="logo">ServerStatus</div>
        </Header>
        <Content style={{background:'#fff'}}>
          <Row type="flex" justify="center">
            <Col xs={24} sm={23} md={23} lg={22} xl={20} xxl={16}>
              <Spin size="large" spinning={!isOnline} tip="Loading...">
                <ServerRow {...serverData} />
              </Spin>
            </Col>
          </Row>
        </Content>
        <Footer className="footer">
          <a href="https://udev.bid/sergate/" rel="external noopener">WebUI</a> for <a href="https://github.com/BotoX/ServerStatus/" rel="external noopener">ServerStatus</a>, made by <a href="https://www.ofcss.com/" rel="external noopener">Kairee</a> 
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
