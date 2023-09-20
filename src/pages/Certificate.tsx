import React, { useState } from 'react';
import { ethers } from 'ethers';
import {IonCheckbox, IonRadioGroup,IonRadio,IonLabel, IonGrid, IonRow, IonCol, IonButton, IonPage, IonToolbar, IonTitle, IonHeader, IonContent, IonImg, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader,IonCard, IonModal } from '@ionic/react';


import './Profile.css';

function App() {
  const [data, setData] = useState<string>('');
  const [blockHash, setBlockHash] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const openModal = (data: any) => {
    setModalData(data);
    setShowModal(true);
  }
  
  const contractAddress = '0xD06790Cf8b8f7e45Db4D79bA2D3a168C88e9c465'; // Reemplaza con la dirección de tu contrato
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:9545'); // Cambia esto para apuntar a tu red Ganache
  const contract = new ethers.Contract(contractAddress, ['function storeData(string memory data) public', 'function blockHash() public view'], provider);
  const signer = provider.getSigner();

  const storeData = async () => {
    try {
        const tx = await contract.connect(signer).storeData(data);
        const receipt = await tx.wait();
        console.log('Transaction receipt:', receipt);
        const hash = await receipt.blockHash;
        setBlockHash(hash);
        setShowModal(true);

    } catch (error) {
      console.error('Error:', error);
    }
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
        <IonModal isOpen={showModal} className="custom-modal">
          <div className="custom-modal-header">
            <label className='modal-close' onClick={() => setShowModal(false)}>X</label>        
          </div>
          
          <div className='container-contentmodal'>
          <img  className="login-logo" src="http://localhost:8100/assets/check.png" alt="" />
            <h1 className='contentmodal-title'>Certificate ready!</h1>
            <span className='contentmodal-desc'>The certificate number is</span>
            <span className='contentmodal-hash'>{blockHash}</span>
          </div> 
        
        </IonModal>
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
            <IonCard>
              <IonCardHeader>
                <IonCardTitle></IonCardTitle>
                <IonCardSubtitle></IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
              <IonGrid>
                <IonRow className="btnflex">
                  <IonCol>
                      <IonButton fill="clear" className='btn-150 ButtoSaveg'>MEDICAL RECORD</IonButton>
                  </IonCol>
                  <IonCol>
                      <IonButton fill="clear" className='btn-150 ButtoSaveg'>CORRELATION MATRIX</IonButton>
                  </IonCol>
                  <IonCol>
                      <IonButton fill="clear" className='btn-150 ButtoSaveg'>RNA</IonButton>
                  </IonCol>
                  <IonCol>
                      <IonButton fill="clear" className='btn-150 ButtoSaveg'>PCA</IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
                <div className='title-resume'>
                  <h1>CONCLUSIÓN</h1>
                </div>
                <IonRow className="padding-data">
                  <IonCol>
                    <div>
                      <IonRadioGroup class="displayFlex" value="custom-checked">
                        <div className='displayFlex padding-radio'>
                            <IonRadio className="radiobutton" value="custom"></IonRadio><IonLabel className="padding-radio-label" slot="end">Suitable</IonLabel>
                        </div>
                        <div className='displayFlex padding-radio'>
                            <IonRadio className="radiobutton" value="custom-checked"></IonRadio><IonLabel className="padding-radio-label" slot="end">Not Suitable</IonLabel>
                        </div>
                        
                      </IonRadioGroup>
                    </div>
                    <div>
                      <IonLabel className="label-textarea">Medical advice</IonLabel>
                      <div className='container-item-advice'>
                        <IonCheckbox className="checkbox" slot="start"></IonCheckbox>
                        <IonLabel className='label-advice'>Medical check-ups</IonLabel>
                      </div>
                      <div className='container-item-advice'>
                        <IonCheckbox className="checkbox" slot="start"></IonCheckbox>
                        <IonLabel className='label-advice'>Use PPE</IonLabel>
                      </div>
                      <div className='container-item-advice'>
                        <IonCheckbox className="checkbox" slot="start"></IonCheckbox>
                        <IonLabel className='label-advice'>Specific Diet</IonLabel>
                      </div>
                      <div className='container-item-advice'>
                        <IonCheckbox className="checkbox" slot="start"></IonCheckbox>
                        <IonLabel className='label-advice'>Assessment for surgery</IonLabel>
                      </div>
                      <div className='container-item-advice'>
                        <IonCheckbox className="checkbox" slot="start"></IonCheckbox>
                        <IonLabel className='label-advice'>Physiotherapy</IonLabel>
                      </div>
                      <div className='container-item-advice'>
                        <IonCheckbox className="checkbox" slot="start"></IonCheckbox>
                        <IonLabel className='label-advice'>Special attention</IonLabel>
                      </div>
                    </div>
                  </IonCol>
                  <IonCol>
                  <IonLabel className="label-textarea">Notes:</IonLabel>
                    <textarea className="inputText-area" placeholder="Enter data" onChange={(e) => setData(e.target.value)}>
                          {data}
                    </textarea>
                  </IonCol>
                </IonRow>
                
              </IonCardContent>
            </IonCard>
            <div className='column-buttons'>
              <div>
                <IonButton fill="clear" color="danger">Back</IonButton>
              </div>
              <div>
                <IonButton fill="clear" className='ButtoSaveg'>Save for later</IonButton>
                <IonButton className='ButtoSave' onClick={storeData} >Certificate now</IonButton>
              </div>
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    );
}

export default App;