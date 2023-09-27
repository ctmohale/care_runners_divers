import {
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonItem,
  IonRow,
} from "@ionic/react";
import React from "react";
import {
  AiOutlineHistory,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSolidCar } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiUser } from "react-icons/hi";

function Dash() {
  return (
    <div>
      <IonCard className="main_card">
        <br />
        <HiUser size="70" />
        <IonCardTitle className="main_title">CT Mohale</IonCardTitle>
        <IonCardSubtitle>
          profile status
          <span style={{ color: "green" }}>
            <BsFillPatchCheckFill size="20" />
          </span>
        </IonCardSubtitle>
      </IonCard>
      <br />
      <IonCard className="card_btn">
        <br />
        <IonItem className="item_data">
          <IonButton
            color="light"
            routerLink="./profile"
            fill="clear"
            className="btn"
          >
            <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <h6>
                    <AiOutlineUser size="25" />
                  </h6>
                </IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <h6>Access User profile</h6>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonButton>
        </IonItem>

        <IonItem className="item_data">
          <IonButton
            color="light"
            routerLink="./request"
            fill="clear"
            className="btn_all"
          >
            <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <h6>
                    <BiSolidCar size="25" />
                  </h6>
                </IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <h6>Access request</h6>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonButton>
        </IonItem>

        <IonItem className="item_data">
          <IonButton
            routerLink="./history"
            color="light"
            fill="clear"
            className="btn_all"
          >
            <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <h6>
                    <AiOutlineHistory size="25" />
                  </h6>
                </IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <h6>Access trip history</h6>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonButton>
        </IonItem>

        <IonItem className="item_data">
          <IonButton
            routerLink="./wallet"
            color="light"
            fill="clear"
            className="btn_all"
          >
            <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <h6>
                    <GiMoneyStack size="25" />
                  </h6>
                </IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <h6>Access wallet</h6>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonButton>
        </IonItem>

        <IonItem className="item_data">
          <IonButton color="light" fill="clear" className="btn_all">
            <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <h6>
                    <AiOutlineSetting size="25" />
                  </h6>
                </IonCol>
                <IonCol style={{ textAlign: "left" }}>
                  <h6>Access support</h6>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonButton>
        </IonItem>
      </IonCard>
    </div>
  );
}

export default Dash;
