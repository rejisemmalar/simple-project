import React from 'react';
import ReactDom from 'react-dom';
import CommantBox from './CommantBox'
import profile1 from './images/ant.jpg'
import profile2 from './images/dog.jpg'
import profile3 from './images/elephant.jpg'
import profile4 from './images/lion.jpg'
import profile5 from './images/monkey.jpg'
import profile6 from './images/parrot.jpg'
import profile7 from './images/tiger.jpg'
import profile8 from './images/zeebra.jpg'
import profile9 from './images/cat.jpg'
import profile10 from './images/human.jpg'

const Forest = function(){
  return (
    <div className='ui comments'>

    <CommantBox name='ant kumaran'time='3.20pm'profile={profile1}message='wow!..it is a nice vidio'/>
      <CommantBox name='dogee chemms'time='7.50pm'profile={profile2}message='great job!..man'/>
        <CommantBox name='yaanai saami'time='4.20pm'profile={profile3}message='i want more..vidios'/>
          <CommantBox name='singaram'time='10.20am'profile={profile4}message='arragant one'/>
            <CommantBox name='kurangu kuppan'time='1.13am'profile={profile5}message='what ah fun'/>
                <CommantBox name='kiliappan'time='9.31am'profile={profile6}message='the birds and background are very nic'/>
                    <CommantBox name='pulikuthi paandi'time='6.15am'profile={profile7}message='the tiger is best ...'/>
                        <CommantBox name='vari saami'time='1.13am'profile={profile8}message='the subtitile was..very gud..line by line'/>
                            <CommantBox name='poona mani'time='6.28am'profile={profile9}message='keep rocking guys'/>
                                <CommantBox name='kaipulla'time='1.13am'profile={profile10}message='great job man'/>

    </div>
  )
}
ReactDom.render(
  <Forest/>,
  document.querySelector('#reji')
)
