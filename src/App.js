import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image': 'https://cdn.vox-cdn.com/thumbor/8CIbT8aMgmLzG6vTzbWil2LwdWk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19938259/3zlqxf_copy.jpg',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '윤하은',
    'birthday': '011130',
    'gender': '여자',
    'job': '개발자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '921205',
    'gender': '남자',
    'job': '프로그래머'
    },
]

class App extends Component {
  render(){
    return (
      <div>
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
      </div>
    );
  }
}

export default App;