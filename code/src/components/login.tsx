import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { eyeOutline,eyeOffOutline, lockClosedOutline, logoGoogle, mailUnreadOutline } from 'ionicons/icons';
import landingProps from './assets/ts/landingProps';
import { useLogin } from '../hooks/useLogin';
import { useGoogleContinue } from '../hooks/useGoogleContinue';

const Login = ({changeState}:landingProps) => {

  const {email,setEmail,password,setPassword,passwordVisibility,setPasswordVisibility,error,loading,login}=useLogin();
  const {signInWithGoogle,errorGoogle}=useGoogleContinue();
  return (
    <div className="flex flex-row-reverse">
      <Card className="w-1/4 bg-white mt-28 me-36">
        <Card.Header style={{color:"var(--customDarkBlue)",fontSize:'28px',textAlign:'center'}}>Login</Card.Header>
        <Card.Body className='p-4'>
          <Form className='w-full' onSubmit={login}>
            <div className="errorBox">
              {error||errorGoogle}
            </div>
            <InputGroup className='mb-3'>
              <InputGroup.Text>
                <IonIcon icon={mailUnreadOutline} />
              </InputGroup.Text>
              <Form.Control
                placeholder="email"
                aria-label="Email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className='w-3/4'
                autoComplete="on"
              />
            </InputGroup>
            <InputGroup className=' mb-3'>
            <InputGroup.Text>
                <IonIcon icon={lockClosedOutline} />
              </InputGroup.Text>
              <Form.Control
                type={passwordVisibility?"text":"password"}
                placeholder="password"
                aria-label="Password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='w-3/4'
                autoComplete="on"
              />
              <InputGroup.Text onClick={()=>setPasswordVisibility(!passwordVisibility)}>
              <IonIcon icon={passwordVisibility?eyeOutline:eyeOffOutline}></IonIcon>
              </InputGroup.Text>
            </InputGroup>
            <div className="flex justify-center">
        <Button className="rounded-lg text-white w-1/2 bg-blue-500" disabled={loading} type="submit">Login</Button>
        </div>
          </Form>
          <p className="mt-4">
            Don't have an Account? <button className='text-blue-500 underline' onClick={()=>changeState('signup')}>Sign Up</button>
          </p>
        </Card.Body>
        <Card.Footer className='flex justify-center p-4'>
          <Button className="rounded-lg text-white flex-justify-center bg-blue-500" disabled={loading} onClick={()=>{
            signInWithGoogle();
            }}>
            <IonIcon icon={logoGoogle} />
            Continue with Google
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
