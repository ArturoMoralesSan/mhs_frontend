import React from 'react';
import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonList  } from '@ionic/react';
import './Login.css';

function Login() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar-login'>
          <IonTitle>Miner’s Health Shield</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='background-login' fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol className='container-login'>
                <IonCard className='login'>
                <IonCardHeader>
                    <IonCardTitle>
                        <img  className="login-logo" src="http://localhost:8100/assets/logo.svg" alt="" />
                    </IonCardTitle>
                    <IonCardSubtitle className='title-login'>LOG IN</IonCardSubtitle>
                    <div className='divider-title'></div>
                </IonCardHeader>
                <IonCardContent>
                    <IonList className='background-list'>
                        <IonItem className="item-input" color="transparent">
                            <IonLabel className='label-white'>
                                <img  className="label-icon" src="http://localhost:8100/assets/User.svg" alt="" />
                            </IonLabel>
                            <IonInput className='placeholder-white' placeholder="USERNAME"></IonInput>
                        </IonItem>
                        <IonItem className="item-input" color="transparent">
                            <IonLabel className='label-white'>
                                <img  className="label-icon" src="http://localhost:8100/assets/Password.svg" alt="" />
                            </IonLabel>
                            <IonInput className='placeholder-white' type="password" placeholder="PASSWORD"></IonInput>
                        </IonItem>
                        <IonItem  color="transparent">
                            <IonCheckbox className='rememberme-checkbox'slot="start"></IonCheckbox>
                            <IonLabel className='label-white'>REMEMBER ME</IonLabel>
                        </IonItem>
                    </IonList>
                    <IonButton className="buttonLogin" expand="full">LOGIN</IonButton>
                    <div className="divider-login"><span className='divider-login-span'>OR</span></div>
                    <IonRow>
                        <IonCol className='col-socialmedia-google'>
                            <a className="socialmedia-login-google" href="">
                                <img className="label-icon-google" src="http://localhost:8100/assets/Google.svg" alt="" />
                            </a>
                        </IonCol>
                        <IonCol className='col-socialmedia-apple'>
                            <a className="socialmedia-login-apple" href="">
                                <img className="label-icon-apple" src="http://localhost:8100/assets/Apple.svg" alt="" />
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
        
      </IonContent>
    </IonPage>
  );
}
export default Login;