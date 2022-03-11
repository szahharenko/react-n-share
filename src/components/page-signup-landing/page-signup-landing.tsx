import React, { useState } from 'react';
import Header from '../organism-header/organism-header';
import Register from '../organism-register/organism-register';
import './page-signup-landing.scss';
import { MenuItem } from '../../models/models';



interface Props {}

const SignupLanding: React.FC<Props> = () => {
  const [isRegistered, setRegistered] = useState<Boolean>(false);
  const [menuItems, setMenu] = useState<MenuItem[]>([]);
  const createAccount = () => {
    setRegistered(true);
    setMenu([
      { title: 'Home', link: '/'},
      { title: 'Support', link: '/support'},
    ])
  }
  return (
    <>
      <Header menuItems={menuItems}/>
      <div className='sing-up'>
        <div className='wrapper'>
          { !isRegistered && <>
              <div className='sing-up__slogan'>
                <h1>Join</h1>
                <h2>React and share</h2>
              </div>
              <div className='sing-up__form'>
                <Register onSuccess={ createAccount }/>
              </div>
              <div className='sing-up__art'></div>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default SignupLanding;