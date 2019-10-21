import React from 'react';
import { Layout, Typography, Empty } from 'antd';
import 'antd/dist/antd.css'

import './App.css';

const {Header, Content, footer} = Layout;
const {Title}= Typography;
function App() {
  return (
    <Layout>
      <Header>
        <Title>Movie List App</Title>
      </Header>
      <Content>
        <Empty></Empty>
      </Content>
      <footer></footer>
    </Layout>
  );
}

export default App;
