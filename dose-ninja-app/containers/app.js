import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Login from './Login';
import Register from './Register';
import MedicationList from './MedicationList';
import React from 'react';
import MedicationReminder from './components/MedicationReminder';

// Remove the const App declaration

return (
  <View>
    <MedicationReminder />
  </View>
);


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <AuthRoute path="/" component={MedicationList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
