import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonModal, IonButton, IonPage, IonToolbar, IonTitle, IonHeader, IonContent, IonImg, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader,IonCard, IonAccordion, IonItem, IonLabel, IonAccordionGroup } from '@ionic/react';
import Plotly from 'plotly.js-dist-min';
import './Profile.css';


const Profile = () => {
  const [selectedButton, setSelectedButton] = useState('Medical Resume');
  

  const [cellValues, setCellValues] = useState({
    'hereditary-family-history': '',
    'biometric-data': '',
    'pathological-personal-history': '',
    'human-system': '',
    'non-pathological-personal-history': '',
    'work-history-and-risk-factors': '',
    'physical-exploration': '',
  });
  

  const fetchDataMAT = () => {
    setSelectedButton('MAT')
    // Coloca aquí la URL de la API que deseas consultar
    const apiUrl = 'https://minershealthshield.pythonanywhere.com/correlation';

    fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
        Plotly.newPlot('my-plot', json['data'], json['layout']);
    })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  };
  const fetchDataPCA = () => {
    setSelectedButton('PCA')
    // Coloca aquí la URL de la API que deseas consultar
    const apiUrl = 'https://minershealthshield.pythonanywhere.com/PCA';

    fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
        Plotly.newPlot('my-plot', json['data'], json['layout']);
    })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  };
  const fetchDataRNA = () => {
    setSelectedButton('RNA')
    // Coloca aquí la URL de la API que deseas consultar
    const apiUrl = 'https://minershealthshield.pythonanywhere.com/RNA';

    fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
        Plotly.newPlot('my-plot', json['data'], json['layout']);
    })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  };
  const fetchData = () => {
    setSelectedButton('Medical Resume')
  };
  
  

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
         <IonTitle >
          <img src="/assets/papu.png" alt="Image Alt Text" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="3">
              <IonCard>
                <IonCardHeader>
                </IonCardHeader>
                <IonCardContent className="card-profile">
                  <IonImg src="/assets/pablo.png" class="minero-image"></IonImg>
                  <IonCardTitle class="custom-card-title" >Tom Ray</IonCardTitle>
                  <IonCardSubtitle>37 Years Old </IonCardSubtitle>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle class= "custom-card-title" >Role Position</IonCardTitle>
                  <IonCardSubtitle>
                    <div className="row-role">
                      <span className='role-name'>Supervisor</span><span className='role-date'>May 23 - Present</span>
                    </div>
                    <div className="row-role">
                      <span className='role-name'>Driller</span> <span className='role-date'>June 22 - Mayo 23</span>
                    </div>
                    <div className="row-role">
                        <span className='role-name'>Helper</span> <span className='role-date'>May 21 - June 22</span>
                    </div>
                    
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle class= "custom-card-title" > Medical History</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="9">
            <div>
                <IonGrid className="grid-step">
                  <IonRow className="row-step">
                  <IonCol size="2">
                      <div className='step step-active' onClick={() => fetchData()}>
                        <span className='step-number'>1</span>
                        Medical Resume
                      </div>
                  </IonCol>
                  <IonCol size="1">
                  <div className="divider-step divider-step-active"></div>
                  </IonCol>
                  <IonCol size="2">
                      <div className='step' onClick={() => fetchDataMAT()}>
                        <span className='step-number'>2</span>
                        Correlation Matrix
                      </div>
                  </IonCol>
                  <IonCol size="1">
                  <div className="divider-step"></div>
                  </IonCol>
                  <IonCol size="2">
                      <div className='step' onClick={() => fetchDataPCA()}>
                        <span className='step-number'>3</span>
                        PCA
                      </div>
                  </IonCol>
                  <IonCol size="1">
                  <div className="divider-step"></div>
                  </IonCol>
                  <IonCol size="2">
                    <div className='step' onClick={() => fetchDataRNA()}>
                      <span className='step-number'>4</span>
                      RNA
                    </div>
                  </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle></IonCardTitle>
                <IonCardSubtitle></IonCardSubtitle>
              </IonCardHeader>
              
              <IonCardContent>
              {selectedButton === 'Medical Resume' ? (
                    <IonAccordionGroup>
                    <IonAccordion className="bg-accordion" value="first" toggleIconSlot="start">
                      <IonItem className="bg-accordion" slot="header" color="light">
                        <IonLabel>HEREDITARY-FAMILY HISTORY</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        First Content
                      </div>
                    </IonAccordion>
                    <IonAccordion className="bg-accordion" value="second" toggleIconSlot="start">
                      <IonItem slot="header" color="light">
                        <IonLabel>BIOMETRIC DATA</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Second Content
                      </div>
                    </IonAccordion>
                    <IonAccordion className="bg-accordion" value="third" toggleIconSlot="start">
                      <IonItem slot="header" color="light">
                        <IonLabel>PATHOLOGICAL PERSONAL HISTORY</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Third Content
                      </div>
                    </IonAccordion>
                    <IonAccordion className="bg-accordion" value="four" toggleIconSlot="start">
                      <IonItem slot="header" color="light">
                        <IonLabel>HUMAN HISTORY</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Third Content
                      </div>
                    </IonAccordion>
                    <IonAccordion className="bg-accordion" value="five" toggleIconSlot="start">
                      <IonItem slot="header" color="light">
                        <IonLabel>NON-PATHOLOGICAL PERSONAL HISTORY</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Third Content
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>
              ) : (
                <div id="my-plot" />
              )}
              


              </IonCardContent>
            </IonCard>
            <div className='column-buttons'>
              <div>
                <IonButton fill="clear" color="danger">Back</IonButton>
              </div>
              <div>
                <IonButton fill="clear" className='ButtoSaveg'>Save for later</IonButton>
                <IonButton className='ButtoSave'>Next</IonButton>
              </div>
            </div>
            </IonCol>
            
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};
export default Profile;