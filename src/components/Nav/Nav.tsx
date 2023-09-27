import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import "./Nav.css";
import { TbLogin } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { Amplify, Auth, Storage } from "aws-amplify";
function Nav() {
  //User logout
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {}
  }
  return (
    <IonGrid className="Nav_row fixed-top">
      <IonRow>
        <IonCol>
          <IonButton routerLink="/home" fill="clear" className="nav_btn">
            Care <GoLaw size="25" /> Runners
          </IonButton>
        </IonCol>
        <IonCol style={{ textAlign: "right" }}>
          <IonButton onClick={() => signOut()} fill="clear" className="nav_btn">
            <TbLogin /> Sign out
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Nav;
