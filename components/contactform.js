import styles from './contactform.module.css';
import {Component} from "react";
import axios from 'axios';
import HCaptcha from '@hcaptcha/react-hcaptcha';


class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            tel: '',
            message: '',
            isSubmitted: false,
            isLoading: false,
            token: ''
        };
        this.captchaApiKey = '';
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        axios.post('/api/contact', this.state)
            .then(resp => this.setState({
                isSubmitted: true,
                name: '',
                email: '',
                tel: '',
                message: '',
                token: '',
                isLoading: false,
            }))
            .catch(error => {
                console.log(error);
            });
        event.preventDefault();
        this.setState({isLoading: true});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleVerificationSuccess(token) {
        this.setState({
            token
        })
    }


    render() {
        const showLoader = this.state.isLoading;
        const loaderStyles = this.state.isSubmitted ? `${styles["circle-loader"]} ${styles["load-complete"]}` : styles["circle-loader"];

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label htmlFor="name">Votre nom</label>
                <input type="text" id="name" name="name" required value={this.state.name}
                       onChange={this.handleInputChange}/>
                <label htmlFor="email">Votre email (optionnel si téléphone fourni)</label>
                <input type="email" id="email" name="email" required={this.state.email === '' && this.state.tel === ''}
                       value={this.state.email}
                       onChange={this.handleInputChange}/>
                <label htmlFor="tel">Votre téléphone (optionnel si email fourni)</label>
                <input type="tel" id="tel" name="tel" required={this.state.email === '' && this.state.tel === ''}
                       onChange={this.handleInputChange} value={this.state.tel}/>
                <label htmlFor="needs">Votre message</label>
                <textarea id="message" name="message" required onChange={this.handleInputChange}
                          value={this.state.message}/>
                <HCaptcha
                    sitekey={this.captchaApiKey}
                    onVerify={token => this.handleVerificationSuccess(token)}
                    id="hcaptcha-component"
                />
                <div className={styles["buttonAndSuccess"]}>
                    <button disabled={this.state.token === ''} type="submit">Envoyer</button>
                    {(showLoader || this.state.isSubmitted) &&
                    <div className={loaderStyles}>
                        <div className={`${styles["checkmark"]} ${styles["draw"]}`} style={this.state.isSubmitted ? {'display' : 'block'}: {}}/>
                    </div>
                    }
                </div>
            </form>
        )
    }
}

export default ContactForm;
