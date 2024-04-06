import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

// Layouts
import AuthLayout from 'layouts/Auth.js';
import MainLayout from 'layouts/Portal.js';
import {formFields, authenticatorComponents} from "./toolkit/authenticatorComponents";

Amplify.configure(awsExports);

function App() {
    return (
        <Authenticator formFields={formFields} components={authenticatorComponents} hi>
            {({ signOut, user }) => (
                user ? (
                    <HashRouter>
                        <Switch>
                            <Route path={`/auth`} component={AuthLayout} />
                            <Route path={`/portal`} render={(props) => <MainLayout {...props} user={user} signOut={signOut} />} />
                            <Redirect from={`/`} to="/portal/home" />
                        </Switch>
                    </HashRouter>
                ) : null
            )}
        </Authenticator>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
