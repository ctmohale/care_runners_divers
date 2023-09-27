import {
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonItem,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import Users from "../context/users";
import LoginUser from "../context/login";
import Swal from "sweetalert2";
import AuthSetEmail from "../context/authEmail";
import { CreateUserInput, CreateUserMutation } from "../API";
import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";

function Reg() {
  //Global var
  const { user, setUser }: any = useContext(Users);
  const { loginUser, setLoginUser }: any = useContext(LoginUser);
  const { tempEmailAuth, setTempEmailAuth }: any = useContext(AuthSetEmail);

  //User profile
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [isLoading, setIsloading]: any = useState(true);

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

  useEffect(() => {
    if (user.length > 0) {
      setIsloading(false);
    }
  }, [user]);

  useEffect(() => {
    console.log(tempEmailAuth);
  }, [tempEmailAuth]);

  //update profile function
  async function createProfile() {
    //User info
    const userDetails: CreateUserInput = {
      email: tempEmailAuth,
      name: name,
      surname: surname,
      cell_no: cell,
      access: "driver",
    };

    //User
    const create_driver = await API.graphql<GraphQLQuery<CreateUserMutation>>({
      query: mutations.createUser,
      variables: { input: userDetails },
    });

    if (create_driver) {
      Toast.fire({
        icon: "success",
        title: "Driver profile created successfully !.",
      });
    }

    window.location.href = "/";
  }

  return (
    <div>
      <IonCard className="main_card">
        <HiUser size="70" />
        <IonCardTitle className="main_title">Driver</IonCardTitle>
        <IonCardSubtitle>Registartion</IonCardSubtitle>
      </IonCard>
      <br />
      <br />
      <IonCard className="card_btn">
        <br />
        <div className="card_btn_sub">
          <IonItem className="item_data">
            <IonInput
              className="inputA"
              onIonInput={(e: any) => setName(e.target.value)}
              color="light"
              label="Enter your name"
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem className="item_data">
            <IonInput
              className="input"
              onIonInput={(e: any) => setSurname(e.target.value)}
              color="light"
              label="Enter your surname"
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>

          <IonItem className="item_data">
            <IonInput
              readonly
              color="light"
              className="input"
              onIonInput={(e: any) => setEmail(e.target.value)}
              label="Enter your email"
              labelPlacement="floating"
              placeholder="Enter email"
              value={tempEmailAuth}
            ></IonInput>
          </IonItem>

          <IonItem className="item_data">
            <IonInput
              readonly
              className="input"
              color="light"
              label="Enter your password"
              labelPlacement="floating"
              placeholder="Enter password"
              type="password"
              value="12345"
            ></IonInput>
          </IonItem>

          <IonItem className="item_data">
            <IonInput
              className="input"
              onIonInput={(e: any) => setCell(e.target.value)}
              color="light"
              label="Enter your cell no"
              labelPlacement="floating"
              placeholder="Enter text"
            ></IonInput>
          </IonItem>
        </div>
        <IonItem className="item_data">
          <IonButton
            onClick={() => createProfile()}
            color="light"
            className="btn_update"
          >
            <AiOutlineUser /> Add profile
          </IonButton>
        </IonItem>
      </IonCard>
    </div>
  );
}

export default Reg;
