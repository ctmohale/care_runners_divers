import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Request from "./pages/Request";
import History from "./pages/History";
import Wallet from "./pages/Wallet";
import Info from "./pages/Info";
import { Amplify, Auth, Storage } from "aws-amplify";
import { SignInHeader } from "./login/SignInHeader";
import { SignInFooter } from "./login/SignInFooter";
import { SignUpHeader } from "./login/SignUpHeader";
import { PasswordResetHeader } from "./login/PasswordResetHeader";
import Users from "./context/users";
import PickUprequest from "./context/request";
import LoginUser from "./context/login";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { GraphQLSubscription } from "@aws-amplify/api";
import * as subscriptions from "./graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import * as queries from "./graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";

import {
  ListCaseFilesQuery,
  ListLawFirmsQuery,
  ListMembershipAccessesQuery,
  ListMembershipsQuery,
  ListPickUpRequestsQuery,
  ListUsersQuery,
  OnCreateCaseFileSubscription,
  OnDeletePickUpRequestSubscription,
  OnUpdateLawFirmSubscription,
  OnUpdateMembershipAccessSubscription,
  OnUpdateUserSubscription,
} from "./API";
import AuthSetEmail from "./context/authEmail";
Amplify.configure(awsExports);
(window as any).global = window;
setupIonicReact();

function App() {
  //Global variables
  const [user, setUser]: any = useState([]);
  const [pickRequest, setPickUprequest]: any = useState();
  const [loginUser, setLoginUser]: any = useState([]);
  const [tempEmailAuth, setTempEmailAuth]: any = useState(null);

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

  //Call functions
  useEffect(() => {
    getUsers();
    getPickUprequest();
  }, []);

  //Login access
  useEffect(() => {
    checkUser();
  }, [user]);

  //Login access
  useEffect(() => {
    if (loginUser) {
      console.log(loginUser);
    }
  }, [loginUser]);

  //User sub
  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<OnUpdateUserSubscription>>(
      graphqlOperation(subscriptions.onUpdateUser)
    ).subscribe({
      next: ({ provider, value }) => {
        updateStateDataObject(value.data?.onUpdateUser, user, setUser);
        setLoginUser(value.data?.onUpdateUser);
      },
      error: (error) => console.warn(error),
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);

  //Get all users
  async function getUsers() {
    const getAllUsers = await API.graphql<GraphQLQuery<ListUsersQuery>>({
      query: queries.listUsers,
    });

    //Get all users
    console.log(getAllUsers.data?.listUsers?.items);
    setUser(getAllUsers.data?.listUsers?.items);
  }

  //
  //User sign in function
  async function checkUser() {
    try {
      if (true) {
        await Auth.currentAuthenticatedUser().then((userData) => {
          //Set user email

          console.log("yebo");
          setTempEmailAuth(userData?.attributes?.email);
          for (let i = 0; i < user.length; i++) {
            if (
              user[i].email === userData?.attributes?.email &&
              user[i].access === "driver"
            ) {
              Toast.fire({
                icon: "success",
                title: "Account infomation varified! Welcome.",
              });

              setLoginUser(user[i]);

              //break;
            } else if (i === user.length - 1) {
              Toast.fire({
                icon: "warning",
                title: "User Account not activated",
              });
              // signOut();
            }
          }
        });
      } else {
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  //User logout
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {}
  }

  //Get all request
  async function getPickUprequest() {
    const getAllPickUpRequest = await API.graphql<
      GraphQLQuery<ListPickUpRequestsQuery>
    >({
      query: queries.listPickUpRequests,
    });

    //Get all users
    setPickUprequest(getAllPickUpRequest.data?.listPickUpRequests?.items);

    sortByLatestCreated(pickRequest);
  }

  //Update state function
  function updateStateDataArry(newData: any, prevData: any, stateObject: any) {
    stateObject((prevData: any) => [...prevData, ...newData]);
  }

  function updateStateDataObject(
    newData: any,
    prevData: any,
    stateObject: any
  ) {
    stateObject((prevData: any) => ({
      ...prevData,
      ...newData,
    }));
  }

  function sortByLatestCreated(records: any) {
    return records.sort((a: any, b: any) => {
      // Assuming there is a 'created_at' property in each object
      const dateA: any = new Date(a.created_at);
      const dateB: any = new Date(b.created_at);

      // Sort in descending order (latest first)
      return dateB - dateA;
    });
  }

  return (
    <IonApp>
      <IonReactRouter>
        <Users.Provider value={{ user, setUser }}>
          <PickUprequest.Provider value={{ pickRequest, setPickUprequest }}>
            <LoginUser.Provider value={{ loginUser, setLoginUser }}>
              <AuthSetEmail.Provider
                value={{ tempEmailAuth, setTempEmailAuth }}
              >
                <IonRouterOutlet>
                  <Route exact path="/home">
                    <Home />
                  </Route>
                  <Route exact path="/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/request">
                    <Request />
                  </Route>
                  <Route exact path="/history">
                    <History />
                  </Route>
                  <Route exact path="/wallet">
                    <Wallet />
                  </Route>
                  <Route exact path="/info">
                    <Info />
                  </Route>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                </IonRouterOutlet>
              </AuthSetEmail.Provider>
            </LoginUser.Provider>
          </PickUprequest.Provider>
        </Users.Provider>
        <IonTabBar style={{ display: "none" }} slot="bottom"></IonTabBar>
      </IonReactRouter>
    </IonApp>
  );
}

export default withAuthenticator(App, {
  components: {
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter,
    },
    SignUp: {
      Header: SignUpHeader,
      Footer: SignInFooter,
    },
    ResetPassword: {
      Header: PasswordResetHeader,
      Footer: SignInFooter,
    },
  },
});
