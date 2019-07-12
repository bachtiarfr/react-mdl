import React from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import Main from './layouts/main';

function App() {
  return (
    <div className="App">
      <div>
        <div className="demo-big-content">
          <Layout>

            <Header title="Bachtiar" scroll>

              <Navigation>
                <a href="/About">About Me</a>
                <a href="/Contact">Contact Me</a>
                <a href="/Projects">Projects</a>
              </Navigation>
            </Header>

            <Drawer title="Title">
              <Navigation>
                <a href="/About">About Me</a>
                <a href="/Contact">Contact Me</a>
                <a href="/Projects">Projects</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    </div >
  );
}
export default App;
