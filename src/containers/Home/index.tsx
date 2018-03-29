import * as React from 'react';
import { observer } from 'mobx-react';
import { match } from 'react-router';

import Cover from '../Cover';
import Header from '../../components/Header';
import Abstract from '../../components/Abstract';
import Skills from '../../components/Skills';

const s = require('./style.scss');

interface IProps {
  match: match<{ language: string }>;
}

@observer
export default class Home extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <Header />
        <Cover />
        <Abstract />
        <Skills />
      </div>
    );
  }
}
