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
import { GiMoneyStack } from "react-icons/gi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Nav from "../components/Nav/Nav";
import { useContext, useEffect, useState } from "react";
import Users from "../context/users";
import LoginUser from "../context/login";
import Swal from "sweetalert2";
import { UpdateUserInput, UpdateUserMutation } from "../API";
import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";

const Profile: React.FC = () => {
  const { user, setUser }: any = useContext(Users);
  const { loginUser, setLoginUser }: any = useContext(LoginUser);

  //User profile
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [cell, setCell]: any = useState("");

  //Sweet Alert Toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //Set user
  useEffect(() => {
    if (loginUser) {
      setName(loginUser.name);
      setSurname(loginUser.surname);
      setCell(loginUser.cell_no);
      setEmail(loginUser.email);
    }
  }, [loginUser]);

  useEffect(() => {
    if (user.length > 0) {
      //setIsloading(false);
    }
  }, [user]);

  //update profile function
  async function updateProfile() {
    //User info
    const userDetails: UpdateUserInput = {
      id: loginUser.id,
      name: name,
      surname: surname,
      cell_no: cell,
    };

    //User
    const updateUserData = await API.graphql<GraphQLQuery<UpdateUserMutation>>({
      query: mutations.updateUser,
      variables: { input: userDetails },
    });

    if (updateUserData) {
      Toast.fire({
        icon: "success",
        title: "Profile updated successfully !.",
      });
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <Nav />
        <IonCard className="main_card">
          <HiUser size="70" />
          <IonCardTitle className="main_title">Profile</IonCardTitle>
          <IonCardSubtitle>
            profile status
            <span style={{ color: "green" }}>
              <BsFillPatchCheckFill size="20" />
            </span>
          </IonCardSubtitle>
        </IonCard>

        <IonCard className="card_btn">
          <br />
          <div className="card_btn_sub">
            <IonItem className="item_data">
              <IonInput
                className="inputA"
                label="Enter your name"
                value={name}
                onIonInput={(e: any) => setName(e.detail.value)}
                labelPlacement="floating"
                placeholder="Enter text"
              ></IonInput>
            </IonItem>

            <IonItem className="item_data">
              <IonInput
                className="input"
                value={surname}
                onIonInput={(e: any) => setSurname(e.detail.value)}
                label="Enter your surname"
                labelPlacement="floating"
                placeholder="Enter text"
              ></IonInput>
            </IonItem>

            <IonItem className="item_data">
              <IonInput
                className="input"
                value={email}
                onIonInput={(e: any) => setEmail(e.detail.value)}
                label="Enter your email"
                labelPlacement="floating"
                placeholder="Enter email"
              ></IonInput>
            </IonItem>

            <IonItem className="item_data">
              <IonInput
                readonly
                className="input"
                value="00000"
                type="password"
                label="Enter your password"
                labelPlacement="floating"
                placeholder="Enter password"
              ></IonInput>
            </IonItem>

            <IonItem className="item_data">
              <IonInput
                className="input"
                label="Enter your cell no"
                labelPlacement="floating"
                placeholder="Enter text"
                onIonInput={(e: any) => setCell(e.detail.value)}
                value={cell}
              ></IonInput>
            </IonItem>
          </div>
          <IonItem className="item_data">
            <IonButton
              onClick={() => updateProfile()}
              color="light"
              className="btn_update"
            >
              <AiOutlineUser /> Update profile
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
