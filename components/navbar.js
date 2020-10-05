import styles from './navbar.module.css'
import Link from 'next/link'
import {Component} from "react";
import fbIcon from '../public/fb-icon.svg'
import novasLogo from '../public/novas-logo.png'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {nav: {isOpen: false}};
    }

    toggleNav() {
        this.setState({
            nav: {isOpen: !this.state.nav.isOpen}
        });
    }

    render() {
        const isActiveClass = this.state.nav.isOpen ? styles.active : '';
        const navClasses = `${styles.nav} } ${isActiveClass}`;
        const items = this.props.items.map(item =>
            <li>
                <Link href={`${item.value}`}>
                    <a>{item.text}</a>
                </Link>
            </li>
        )
        return (
            <div className={styles.navbar}>
                <div className="container" style={{paddingRight: 0}}>
                    {!this.props.isIndexPage  &&
                        <Link  href="/">
                            <img id={styles['novas-logo']} src={novasLogo} className='img-fluid' alt="Logo Novas"/>
                        </Link>
                    }
                    <div className={styles.buttonNav}>
                        <button className={styles.hamburger} type="button" onClick={this.toggleNav.bind(this)}>
                      <span className={styles['hamburger-box']}>
                        <span className={styles["hamburger-inner"]}></span>
                      </span>
                        </button>
                    </div>
                    <div className={navClasses}>
                        <a className={styles.closeNavBtn} onClick={this.toggleNav.bind(this)}>&times;</a>
                        <nav className={styles.main}>
                            <ul>{items}</ul>
                        </nav>
                        <nav className={styles.lang}>
                            <ul>
                                <li>Fr</li>
                                <li>/</li>
                                <li>En</li>
                            </ul>
                        </nav>
                        <nav className={styles.socialNetNav}>
                            <img src={fbIcon} alt="facebook icon"/>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;

