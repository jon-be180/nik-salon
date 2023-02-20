import React from 'react';
import { Link } from 'gatsby';
import { Logo } from '../Logo';
import { Theme, useGlobalState } from '../../context';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import * as classes from './style.module.css';

export function Footer(): React.ReactElement {
    const { globalState } = useGlobalState();
    const siteConfiguration = useSiteConfiguration();
    const siteMetadata = useSiteMetadata();

    return (
        <footer
            className={classes.Footer}
            
        >
            <div className={classes.ContentWrapper}>
                <Link to="/" aria-label="home">
                    <Logo
                        fontSize="1.5rem"
                    />
                </Link>

                <div className={classes.box}>
                    <h3>Ubicación</h3>
                    <p>Km 17.4 Carretera a San Jose Pinula, <br/>CC Plaza Pinula, Local 16, Guatemala</p>
                    <p><a href="https://ul.waze.com/ul?preview_venue_id=176685201.1766524334.4873319&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">Ir con Waze</a></p>
                </div>

                <div className={classes.box}>
                    <h3>Correo Electrónico</h3>
                    <p><a href="mailto:hola@niksalon.com.gt">hola@niksalon.com.gt</a></p>
                </div>

                <div className={classes.box}>
                    <h3>Horas</h3>
                    <p>
                        Lunes - Jueves 08:00 - 18:00<br/>
                        Viernes 08:30 - 18:30<br/>
                        Sabado 08:00 - 18:00
                    </p>
                </div>

                <div className={classes.Links}>
                    {siteConfiguration.navigation.footer.map((linkObject, key) => {
                        return (
                            <Link
                                key={key}
                                to={linkObject.url}
                                aria-label={linkObject.label}
                            >
                                {linkObject.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}