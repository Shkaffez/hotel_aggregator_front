import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { NavBar } from './components/NavBar';
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from ".";
import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    check().then(data => {
      if (data.email) {
        user.setUser({
          name: data.name,
          email: data.email,
          _id: data._id,
          role: data.role
        });
        user.setIsAuth(true);
      }
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animagion={"grow"} />
  }


  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
