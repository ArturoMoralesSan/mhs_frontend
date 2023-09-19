import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonItem, IonButton, IonPage, IonToolbar, IonTitle, IonHeader, IonContent, IonImg, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader,IonCard } from '@ionic/react';


import './Profile.css';


const Profile = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const [imageURL, setImageURL] = useState('');

  // Define image URLs for each button
  const imageMapping  = {
    'Correlation Matrix':  '/assets/mat.png',
    'PCA': '/assets/PCA.png',
    'RNA': '/assets/rna.png',
  };
  const imageUrls = [
    '/assets/mat.png',
    '/assets/PCA.png',
    '/assets/rna.png',
    // Add more image URLs as needed
  ];

  const defaultImage = '/assets/mat.png';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const [cellValues, setCellValues] = useState({
    'hereditary-family-history': '',
    'biometric-data': '',
    'pathological-personal-history': '',
    'human-system': '',
    'non-pathological-personal-history': '',
    'work-history-and-risk-factors': '',
    'physical-exploration': '',
  });

  const handleCellClick = (cellId: string) => {
    const inputValue = window.prompt('Enter data for this cell:');
    if (inputValue !== null) {
      setCellValues((prevValues) => ({
        ...prevValues,
        [cellId]: inputValue,
      }));
    }
  };
  

  const imageKeys = Object.keys(imageMapping);

  
  const medicalResumeTable = (
    <div className="medical-resume-table">
      <table>
        <tbody>
          <tr>
          <td id="hereditary-family-history">Hereditary-family history</td>
          <td id="biometric-data">Biometric Data</td>
          <td id="pathological-personal-history">Pathological Personal History</td>
          <td id="human-system">Human System</td>
          <td id="non-pathological-personal-history">Non Pathological Personal History</td>
          <td id="work-history-and-risk-factors">Work history and risk factors</td>
          <td id="physical-exploration">Physical Exploration</td>
        </tr>
        </tbody>
      {/* Add more rows and columns as needed */}
      </table>
    </div>
    
  );

  // Function to handle button click
  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);
  
    if (buttonText === 'Medical Resume') {
      setImageURL(medicalResumeTable[buttonText as keyof typeof medicalResumeTable]);
    } else if (buttonText === 'Change Image') {
      // Cycle through the images
      const nextImageIndex = (currentImageIndex + 1) % imageUrls.length;
      setImageURL(imageUrls[nextImageIndex]);
      setCurrentImageIndex(nextImageIndex);
    } else {
      setImageURL(imageMapping[buttonText as keyof typeof imageMapping]);
    }
  }
  
  

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
                      <div className='step step-active' onClick={() => handleButtonClick('Medical Resume')}>
                        <span className='step-number'>1</span>
                        Medical Resume
                      </div>
                  </IonCol>
                  <IonCol size="1">
                  <div className="divider-step divider-step-active"></div>
                  </IonCol>
                  <IonCol size="2">
                      <div className='step' onClick={() => handleButtonClick('Correlation Matrix')}>
                        <span className='step-number'>2</span>
                        Correlation Matrix
                      </div>
                  </IonCol>
                  <IonCol size="1">
                  <div className="divider-step"></div>
                  </IonCol>
                  <IonCol size="2">
                      <div className='step' onClick={() => handleButtonClick('PCA')}>
                        <span className='step-number'>3</span>
                        PCA
                      </div>
                  </IonCol>
                  <IonCol size="1">
                  <div className="divider-step"></div>
                  </IonCol>
                  <IonCol size="2">
                    <div className='step' onClick={() => handleButtonClick('RNA') }>
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
                    <div className="medical-resume-table">
                    <table>
                      <tbody>
                        <tr>
                          <td id="hereditary-family-history" onClick={() => handleCellClick('hereditary-family-history')}>
                            {cellValues['hereditary-family-history']}
                          </td>
                          <td id="biometric-data" onClick={() => handleCellClick('biometric-data')}>
                            {cellValues['biometric-data']}
                          </td>
                          {/* Repeat for other cells */}
                        </tr>
                        {/* Add more rows and columns as needed */}
                      </tbody>
                    </table>
                  </div>
              ) : (
                <IonImg alt={selectedButton} src={imageURL}></IonImg>
              )}
              


              </IonCardContent>
            </IonCard>
            <div className='column-buttons'>
              <div>
                <IonButton fill="clear" color="danger">Back</IonButton>
              </div>
              <div>
                <IonButton fill="clear" className='ButtoSaveg'>Save for later</IonButton>
                <IonButton className='ButtoSave' onClick={() => handleButtonClick('Change Image')} >Next</IonButton>
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