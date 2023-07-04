import {Button, Card, Form, InputGroup} from 'react-bootstrap';
import {IonIcon} from '@ionic/react';
import { calendarNumberOutline,eyeOffOutline, eyeOutline, lockClosedOutline, logoGoogle, mailUnreadOutline, personCircleOutline} from 'ionicons/icons';
import landingProps from './assets/ts/landingProps';
import { useSignUp } from '../hooks/useSignUp';
import { usePasswordSignUp } from '../hooks/usePasswordSignUp';

const SignUp = ({changeState}:landingProps) => {
  const {password,handlePasswordChange,confirmPassword,handleConfirmPasswordChange,passwordError,cfError,passwordVisibility,setPasswordVisibility,confirmPasswordVisibility,setConfirmPasswordVisibility}=usePasswordSignUp();
  const {email,setEmail,username,setUsername,dob,setDOB,signup,error,loading,disabled}=useSignUp(password,confirmPassword);
  return ( 
    <div className="flex flex-row-reverse">
      <Card className="w-1/4 bg-white mt-4 me-36">
      <Card.Header  style={{color:"var(--customDarkBlue)",fontSize:'28px',textAlign:'center'}}>Sign Up</Card.Header>
      <Card.Body className='p-4'>
        <Form className='w-full' onSubmit={signup}>
        <div className="errorBox">
            {error}
          </div>
         <InputGroup className='p-2'>
          <InputGroup.Text>
            <IonIcon icon={personCircleOutline}></IonIcon>
          </InputGroup.Text>
          <Form.Control placeholder="username" className='w-3/4' required
          value={username} onChange={(e)=>setUsername(e.target.value)}
          aria-label="Username" id="username" autoComplete='off'></Form.Control>
        </InputGroup>
         <InputGroup className='p-2'>
          <InputGroup.Text>
            <IonIcon icon={mailUnreadOutline}></IonIcon>
          </InputGroup.Text>
          <Form.Control placeholder="email" className='w-3/4' required
          value={email} onChange={(e)=>setEmail(e.target.value)}
          aria-label="Email" id="email"  autoComplete='off'></Form.Control>
        </InputGroup>
         <InputGroup className='p-2'>
          <InputGroup.Text>
            <IonIcon icon={lockClosedOutline}></IonIcon>
          </InputGroup.Text>
          <Form.Control type={passwordVisibility?"text":"password"} placeholder="password" className='w-3/4' required
          value={password} onChange={(e)=>handlePasswordChange(e.target.value)}
          aria-label="Password" id="password"  autoComplete='off'></Form.Control>
          <InputGroup.Text onClick={()=>setPasswordVisibility(!passwordVisibility)}>
            <IonIcon icon={passwordVisibility?eyeOutline:eyeOffOutline}></IonIcon>
          </InputGroup.Text>
        </InputGroup>
        <div className="errorBox">
            {passwordError}
          </div>
         <InputGroup className='p-2'>
          <InputGroup.Text>
            <IonIcon icon={lockClosedOutline}></IonIcon>
          </InputGroup.Text>
          <Form.Control type={confirmPasswordVisibility?"text":"password"} placeholder="confirm password" className='w-3/4' required
          value={confirmPassword} onChange={(e)=>handleConfirmPasswordChange(e.target.value)}
          aria-label="Confirm Password" id="cfpassword"  autoComplete='off'></Form.Control>
          <InputGroup.Text onClick={()=>setConfirmPasswordVisibility(!confirmPasswordVisibility)}>
            <IonIcon icon={confirmPasswordVisibility?eyeOutline:eyeOffOutline}></IonIcon>
          </InputGroup.Text>
        </InputGroup>
        <div className="errorBox">
            {cfError}
          </div>
         <InputGroup className='p-2'>
          <InputGroup.Text>
            <IonIcon icon={calendarNumberOutline}></IonIcon>
          </InputGroup.Text>
          <Form.Control type="date" className='w-10/12' required
          max={new Date().toISOString().split('T')[0]}
          value={dob?.toISOString().split('T')[0]}
          onChange={(e)=>setDOB(new Date(e.target.value))}
          aria-label="dob" id="dob"  autoComplete='off'></Form.Control>
        </InputGroup>
        <div className="flex justify-center">
        <Button className="rounded-lg text-white p-2 w-1/2 bg-blue-500" type="submit" disabled={disabled}>Sign Up</Button>
        </div>
        </Form>
        <p className="mt-4">
        Already Have an Account? <button className='text-blue-500 underline' onClick={()=>changeState('login')}>Login</button>
        </p>
        
      </Card.Body>
      <Card.Footer className='flex justify-center p-4'>
          <Button className="rounded-lg text-white p-2 flex-justify-center bg-blue-500">
            <IonIcon icon={logoGoogle} />
            Continue with Google
          </Button>
        </Card.Footer>
    </Card>
    </div>
  );
}
 
export default SignUp;