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
import { GoLaw } from "react-icons/go";
import Nav from "../components/Nav/Nav";
import Map from "../components/Map";

const Info: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav />
        <IonCard className="main_card">
          <GoLaw size="70" />
          <IonCardTitle className="main_title">Request Info</IonCardTitle>
          <IonCardSubtitle>
            <span>Available request</span>
          </IonCardSubtitle>
        </IonCard>

        <IonCard className="card_btn">
          <br />
          <IonItem className="item_data">
            <IonGrid>
              <IonRow className="row_main_top">
                <IonCol>Firm</IonCol>
                <IonCol style={{ textAlign: "left" }}></IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol>Firm name</IonCol>
                <IonCol style={{ textAlign: "left" }}>Tj Machete</IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol>Name</IonCol>
                <IonCol style={{ textAlign: "left" }}>CT Mohale</IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol>Cell No</IonCol>
                <IonCol style={{ textAlign: "left" }}>0743642496</IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol>Trip-distance</IonCol>
                <IonCol style={{ textAlign: "left" }}>100k</IonCol>
              </IonRow>

              <IonRow className="row_main_top_sub">
                <IonCol>Location distance</IonCol>
                <IonCol style={{ textAlign: "left" }}>10k</IonCol>
              </IonRow>
              <Map />

              <IonButton className="btn_accept_request" color="light">Accept Request</IonButton>
            </IonGrid>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Info;
