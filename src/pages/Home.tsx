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
import { GiMoneyStack } from "react-icons/gi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Nav from "../components/Nav/Nav";
import { useContext, useState } from "react";
import AuthSetEmail from "../context/authEmail";

import Reg from "../components/Reg";
import LoginUser from "../context/login";
import Dash from "../components/Dash";

const Home: React.FC = () => {
  const { tempEmailAuth, setTempEmailAuth }: any = useContext(AuthSetEmail);
  const { loginUser }: any = useContext(LoginUser);

  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav />

        {loginUser.email !== undefined ? <Dash /> : <Reg />}
      </IonContent>
    </IonPage>
  );
};

export default Home;
