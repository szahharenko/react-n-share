import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postData } from '../../tools/tools';
import { API, UserSubmitForm, UserFormResponse  }  from '../../models/models';
import './organism-register.scss';

interface Props {
  beforeSubmit?: Function
  onSuccess: Function
}
const Register: React.FC<Props> = ({onSuccess, beforeSubmit}) => {

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    company: Yup.string().required('Please add your company name'),
    password: Yup.string().min(6)
  });

  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const handleError = () => {
    alert('Ops... something went wrong... :(');
  }

  const handleFormSubmit = (data: UserSubmitForm) => {
    if(typeof beforeSubmit === 'function') beforeSubmit();
    postData(API, {...data, ...{action: 'register'}})
      .then((resp: UserFormResponse) => {
        if(resp.json) {
          onSuccess(resp);
        } else {
          handleError();
        }
      })
      .catch(() => handleError())
  }

  const signUpWithGoogle = () => {
    alert('Good choise!');
  }

  return (
    <div className='register'>

        <form onSubmit={handleSubmit((data: UserSubmitForm) => handleFormSubmit(data))} method="post">

          <input placeholder='Company name' data-testid={"company"} type="text" {...register('company')} className={`${errors.company ? 'is-invalid' : ''}`}/>
          { errors.company && <span className='error-message'>{errors.company.message}</span> }

          <input placeholder='Email' data-testid={"email"} type="email" {...register('email')} className={`${errors.email ? 'is-invalid' : ''}`} />
          { errors.email && <span className='error-message'>{errors.email.message}</span> }

          <input placeholder='•••••••••' data-testid={"password"} type="password" {...register('password')} className={`${errors.password ? 'is-invalid' : ''}`}/>
          { errors.password && <span className='error-message'>{errors.password.message}</span> }

          <div className='form-submit'>
            <button data-testid={"submit"} type='submit'>JOIN</button>
          </div>

          <div className='or'>
            or
          </div>

          <div className='google'>
            <button onClick={signUpWithGoogle} className='alt google-button' data-testid={"goodle"} type='button'>Join with google</button>
          </div>

          <div className='terms'>
            When you create a React &amp; Share account, we ask for some personal information. This info helps keep your account secure and makes our services more useful. To learn more about how we use this info, read the <a href="#terms">Terms</a> and <a href="#pp">Privacy Policy</a>.
          </div>


        </form>
    </div>
  );
}

export default Register;