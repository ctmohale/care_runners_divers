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
import { GiTakeMyMoney } from "react-icons/gi";
import Nav from "../components/Nav/Nav";

const Wallet: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav />
        <IonCard className="main_card">
          <GiTakeMyMoney size="70" />
          <IonCardTitle className="main_title">Wallet R5000</IonCardTitle>
          <IonCardSubtitle>
            <span>Available Funds</span>
          </IonCardSubtitle>
        </IonCard>

        <IonCard className="card_btn">
          <br />
          <IonItem className="item_data">
            <IonGrid>
              <IonRow className="row_main_top">
                <IonCol size="5">Firm</IonCol>
                <IonCol style={{ textAlign: "left" }}>Distance</IonCol>
                <IonCol style={{ textAlign: "left" }}>Profit</IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol size="5">Tj Matchete</IonCol>
                <IonCol style={{ textAlign: "left" }}>100km</IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <b>R500</b>
                </IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol size="5">Tj Matchete</IonCol>
                <IonCol style={{ textAlign: "left" }}>100km</IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <b>R500</b>
                </IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol size="5">Tj Matchete</IonCol>
                <IonCol style={{ textAlign: "left" }}>100km</IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <b>R500</b>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Wallet;
