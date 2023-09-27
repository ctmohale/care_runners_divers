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
import { useContext } from "react";
import PickUprequest from "../context/request";

const Request: React.FC = () => {
  const { pickRequest }: any = useContext(PickUprequest);
  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav />
        <IonCard className="main_card">
          <GoLaw size="70" />
          <IonCardTitle className="main_title">Pick-Up Requ..</IonCardTitle>
          <IonCardSubtitle>
            <span>Available request</span>
          </IonCardSubtitle>
        </IonCard>

        <IonCard className="card_btn">
          <br />
          <IonItem className="item_data">
            <IonGrid>
              <IonRow className="row_main_top">
                <IonCol>Request</IonCol>
                <IonCol style={{ textAlign: "left" }}>Access request </IonCol>
              </IonRow>

              {pickRequest &&
                pickRequest.map((data_element: any) => {
                  return (
                    <IonRow key={data_element.id} className="row_main_top_sub">
                      <IonCol style={{ paddingTop: "15px" }}>
                        {data_element.request_type}
                      </IonCol>
                      <IonCol style={{ textAlign: "left" }}>
                        <IonButton
                          routerLink="./info"
                          className="btn_access_request"
                          color="light"
                          fill="clear"
                        >
                          <BsArrowRightCircleFill size="30" /> &nbsp; Open
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  );
                })}
            </IonGrid>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Request;
