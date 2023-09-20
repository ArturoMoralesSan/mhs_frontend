import React, { useState } from 'react';
import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonList  } from '@ionic/react';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes realizar la validación del correo y la contraseña
    if (email === 'admin@mhs.com' && password === '12345678') {
      // Lógica de inicio de sesión exitoso
      window.location.href = 'http://localhost:8100/certificate';
    } else {
      // Manejar el caso de inicio de sesión fallido
      console.log('Inicio de sesión fallido');
    }
  };
  return (
    <IonPage>
      <IonContent className='background-login' fullscreen>
      <IonGrid>
          <IonRow className='toolbar-launchpad'>
            <IonCol>
            <div className='title-contact'>CONTACT US</div>
            </IonCol>
            <IonCol>
            <div className='title-website'>Miner’s Health Shield</div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol className='container-login'>
                <IonCard className='login'>
                <IonCardHeader>
                    <IonCardTitle>
                        <img  className="login-logo" src="https://minershealthshield.online/assets/logo.svg" alt="" />
                    </IonCardTitle>
                    <IonCardSubtitle className='title-login'>LOG IN</IonCardSubtitle>
                    <div className='divider-title'></div>
                </IonCardHeader>
                <IonCardContent>
                    <IonList className='background-list'>
                        <IonItem className="item-input" color="transparent">
                            <IonLabel className='label-white'>
                                <img  className="label-icon" src="https://minershealthshield.online/assets/User.svg" alt="" />
                            </IonLabel>
                            <IonInput className='placeholder-white' type="email" value={email} placeholder="USERNAME" onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                            
          
          
          
                        </IonItem>
                        <IonItem className="item-input" color="transparent">
                            <IonLabel className='label-white'>
                                <img  className="label-icon" src="https://minershealthshield.online/assets/Password.svg" alt="" />
                            </IonLabel>
                            <IonInput className='placeholder-white' type="password" placeholder="PASSWORD" value={password} 
                            onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
                        </IonItem>
                        <IonItem  color="transparent">
                            <IonCheckbox className='rememberme-checkbox'slot="start"></IonCheckbox>
                            <IonLabel className='label-white'>REMEMBER ME</IonLabel>
                        </IonItem>
                    </IonList>
                    <IonButton className="buttonLogin" expand="full" onClick={handleLogin}>LOGIN</IonButton>
                    <div className="divider-login"><span className='divider-login-span'>OR</span></div>
                    <IonRow>
                        <IonCol className='col-socialmedia-google'>
                            <a className="socialmedia-login-google" href="">
                                <img className="label-icon-google" src="https://minershealthshield.online/assets/Google.svg" alt="" />
                            </a>
                        </IonCol>
                        <IonCol className='col-socialmedia-apple'>
                            <a className="socialmedia-login-apple" href="">
                                <img className="label-icon-apple" src="https://minershealthshield.online/assets/Apple.svg" alt="" />
                            </a>
                        </IonCol>
                    </IonRow>
                    <div className="divider-login"><span className='divider-login-span'>Don’t have an account?</span></div>
                    <div className='button-register-container'>
                        <a className='button-register' href="">SIGN UP</a>
                    </div>
                </IonCardContent>
                </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
            <IonRow>
                <IonCol className='colflex'>
                    <span className='copyright'>Copyright 2023, Miner’s Health Shield. All rights reserved.</span>
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Login;