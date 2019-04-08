import React from 'react';
import { RegistrationForm } from './RegistrationForm';


export class RegisterPage extends React.PureComponent {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                 <RegistrationForm />
            </div>
        );
    }
}
