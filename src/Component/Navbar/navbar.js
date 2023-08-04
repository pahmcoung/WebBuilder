import React, { useRef, useContext, useEffect } from 'react'
import nvstyle from './navbar.module.css';
import './navbar.css'
import { pageDesignContext, userDetailsContext } from '../../Context/contexts';
import { useNavigate, useMatch, Link } from 'react-router-dom';
export default function Navbar() {
    const pageDesignState = useContext(pageDesignContext);
    return (
        <nav className={nvstyle["navbar"]}>
            <div className={nvstyle["navbar_header_logo"]}>
                Builder
            </div>
                <div className={nvstyle["user_persistant_actions"]}>
                    <ul className={nvstyle["navbar_menu_level_one"]}>
                        <li><a onClick={() => pageDesignState.setDesign({ ...pageDesignState.design, pageMode: 1 })} className={nvstyle["btn_responsive"] + " responsive_mobile " + ((pageDesignState.design.pageMode) ? nvstyle["active"] : "")} href='#'><i className="las la-desktop"></i></a></li>
                        <li><a onClick={() => pageDesignState.setDesign({ ...pageDesignState.design, pageMode: 0 })} className={nvstyle["btn_responsive"] + " responsive_pc " + ((!pageDesignState.design.pageMode) ? nvstyle["active"] : "")} href='#'><i className="las la-mobile"></i></a></li>
                    </ul>
                </div>
                <div className={nvstyle["user_persistant_actions"]}>
                    <ul className={nvstyle["navbar_menu_level_one"]}>
                        <li><a className={nvstyle["highlight_btn_light_prev"]} href={`/preview/`} target="_blank">{"Preview"}</a></li>
                        <li><a className={nvstyle["highlight_btn_light_prev"]} onClick={ () => pageDesignState.saveWebPage()} >{"Save"}</a></li>
                    </ul>
                </div>
        </nav>
    )
}
