import { useEffect, useContext, useRef, useState } from 'react';
// import { pageDesignContext, userDetailsContext } from '../Context/contexts';
import AppStyles from './designApp.module.css';
import Navbar from './Navbar/navbar';
import Sidecolumn from './Sidecolumn/sidecolumn';
import PreviewPanel from './PreviewPanel/previewPanel';

import { pageDesignContext } from '../Context/contexts';

import { useLocation, useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useLoadDesignData } from './data/useLoadDesignData';

function DesignApp() {
    const {data} = useLoadDesignData()
    const __webpageParams = useParams();

    const LocsParam = useLocation();


    const navigate = useNavigate();

    let pageDesignState = useContext(pageDesignContext);

    const resizer = useRef({ currentWidth: "300px", isDragStarted: false });

    const [sideWid, setSideWid] = useState({ width: "300px" })
    const [prevWid, prevContWid] = useState({ width: "240px" });

    const updateSettingsWidth = (e) => {
        // resizePanel.current.style.width = e.pageX + "px";
        if (e.pageX > 239 && e.pageX < (window.innerWidth * 0.6)) {
            setSideWid({ width: e.pageX + "px" });
            prevContWid({ width: (e.pageX - 60) + "px" });
        }

        //update the position of element if visib;e
        //check if any element is active at the moment
        if (document.querySelectorAll(".temp_infocus").length > 0) {
            let dockl = document.querySelector("[data-operation]");
            if (dockl) {
                let parentPosition = document.querySelector("[data-panelmain]").getBoundingClientRect();
                let dockSize = document.querySelector(".temp_infocus").getBoundingClientRect();
                dockl.style.left = (dockSize.x - parentPosition.x - 26) + "px";
                dockl.style.top = (dockSize.y - parentPosition.y) + "px";
            }
        }
    }

    // useEffect(() => {
    //     if (UserDetailsState.editorState.websiteId && UserDetailsState.editorState.pageId) setPageState(UserDetailsState.editorState.pageId, UserDetailsState.editorState.websiteId);
    // }, [UserDetailsState.editorState.websiteId, UserDetailsState.editorState.pageId])

    // load default config from local storage 
    useEffect(() => {
        console.log(data)
        pageDesignState.setDesign(data)
        // pageDesignState.setWebDesignState()
    },[data])


    return (
        <div className={AppStyles["app"]}>
            <div className={AppStyles["NavBar"]}>
                <Navbar />
            </div>
            <div className={AppStyles["container"]}>
                <aside style={sideWid} className={AppStyles["options_menu"]} >
                    <div className={AppStyles["options_menu_main"]}><Sidecolumn prevWid={prevWid} key={"sideCol"} /></div>
                    <div draggable ref={resizer} onDragStart={() => resizer.current.isDragStarted = true} onDrag={updateSettingsWidth} onDragEnd={() => resizer.current.isDragStarted = false} className={AppStyles["options_resizer"]}><i className="las la-grip-lines-vertical"></i></div>
                </aside>
                <main className={AppStyles["preview_panel"]}>
                    <PreviewPanel />
                </main>
            </div>
        </div>
    );
}

export default DesignApp;
