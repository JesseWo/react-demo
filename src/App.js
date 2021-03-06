import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import { Button, Avatar } from 'antd';
import testImg from './assets/img/$VEST$icon-success.png';
import testImg1 from './assets/img/icon-success.png';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <h1 className={styles['App-title']}>Welcome to React</h1>
        </header>
        <p className={styles['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Avatar>USER</Avatar>
        <Button type="primary">Button</Button>
        <img src={testImg} alt='test' />
      </div>
    );
  }
}

export default App;
