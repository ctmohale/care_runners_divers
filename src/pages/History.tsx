import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { HiUser } from "react-icons/hi";
import {
  AiOutlineUser,
  AiOutlineHistory,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiSolidCar } from "react-icons/bi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Nav from "../components/Nav/Nav";

const History: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav />
        <IonCard className="main_card">
          <AiOutlineHistory size="70" />
          <IonCardTitle className="main_title">History</IonCardTitle>
          <IonCardSubtitle>
            <span>Pick-up request history</span>
          </IonCardSubtitle>
        </IonCard>

        <IonCard className="card_btn">
          <br />
          <IonItem className="item_data">
            <IonGrid>
              <IonRow className="row_main_top">
                <IonCol>Firm</IonCol>
                <IonCol style={{ textAlign: "left" }}>Access request </IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol style={{ paddingTop: "15px" }}>Tj Matchete</IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <IonButton
                    className="btn_access_request"
                    color="light"
                    fill="clear"
                  >
                    <BsArrowRightCircleFill size="30" /> &nbsp; Open
                  </IonButton>
                </IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol style={{ paddingTop: "15px" }}>Tj Matchete</IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <IonButton
                    className="btn_access_request"
                    color="light"
                    fill="clear"
                  >
                    <BsArrowRightCircleFill size="25" /> &nbsp; Open
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default History;
