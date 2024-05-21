import { IonFooter,IonButton } from '@ionic/react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
        <IonFooter>
            <center>              
              <a href="https://sawadeazam.org">

                <IonButton>
                    Visit us!
                </IonButton>

              </a>            
            </center>
        </IonFooter>
    </div>
  );
};

export default Footer;
