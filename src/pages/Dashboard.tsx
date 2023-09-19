import React from 'react';
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import './Dashboard.css';

function Dashboard() {
  return (
    <IonPage>
      <IonContent className='background-dashboard' fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol className='container-dashboard'>
                <h1 className='title-dashboard'>Welcome Back</h1>
                <p className='user-dashboard'>MD. Bonnie</p>
                <p className='msg-dashboard'>Scan the QR code found on the employees badge</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
export default Dashboard;