import "./App.css";

import intl from "react-intl-universal";
import React, { useState, useEffect, useCallback } from "react";
import { Layout, Row, Col, Spin } from "antd";

import zhCN from './locales/zh-CN.json';
import enUS from './locales/en-US.json';

import ServerRow from "./ServerRow";

const { Header, Footer, Content } = Layout;

const LOCALE_DATA = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

const App: React.FC<any> = () => {
  const [serverData, setServerData] = useState({ servers: [], updated: "0" });
  const [isOnline, setIsOnline] = useState(false);
  const [initDone, setInitDone] = useState(false);

  const setCurrentLocale = (currentLocale: string) => {
    intl.init({
      // debug: true,
      currentLocale,
      locales: LOCALE_DATA,
    });
  };

  const initializeIntl = useCallback(() => {
    if (initDone) {
      return
    }
    // 1. Get the currentLocale from url, cookie, or browser setting
    let currentLocale = intl.determineLocale({
      fallbackLocale: 'en-US',
    });

    // 2. Fallback to "en-US" if the currentLocale isn't supported in LOCALES_LIST
    if (currentLocale.startsWith("zh-")) {
      currentLocale = "zh-CN";
    } else {
      currentLocale = "en-US";
    }

    // 3. Set currentLocale and load locale data 
    setCurrentLocale(currentLocale);

    // 4. After loading locale data, start to render
    setInitDone(true);
  }, [initDone])
  

  useEffect(() => {
    initializeIntl()
    const fetchData = () => {
      fetch("json/stats.json")
        .then((res) => res.json())
        .then((data) => {
          setServerData(data);
          setIsOnline(true);
        })
        .catch((e) => console.log("错误:", e));
    };
    fetchData();
    let itv = setInterval(fetchData, 5000);
    return () => {
      clearInterval(itv);
    };
  }, [initializeIntl]);

  return (
    <div className="App">
      {initDone && (<Layout>
        <Header>
          <div className="logo">ServerStatus</div>
        </Header>
        <Content style={{ background: "#fff" }}>
          <Row justify="center">
            <Col xs={24} sm={23} md={23} lg={22} xl={20} xxl={16}>
              {initDone ? (
                <Spin size="large" spinning={!isOnline} tip="Loading...">
                  <ServerRow {...serverData} />
                </Spin>
              ) : (
                  <div />
                )}
            </Col>
          </Row>
        </Content>
        <Footer className="footer">
          <a
            href="https://github.com/krwu/ServerStatus-web"
            rel="external noopener"
          >
            WebUI
          </a>{" "}
          for{" "}
          <a
            href="https://github.com/BotoX/ServerStatus/"
            rel="external noopener"
          >
            ServerStatus
          </a>
          , made by{" "}
          <a href="https://www.ofcss.com/" rel="external noopener">
            Kairee
          </a>
        </Footer>
      </Layout>
      )}
    </div>
  );
};

export default App;
