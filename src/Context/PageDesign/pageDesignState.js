import * as htmlToImage from 'html-to-image';
import {  useRef, useState } from "react";
import { pageDesignContext } from "../contexts";
import { InitialDeisgnState } from '../../Component/data/useLoadDesignData';
import { useSaveDesignData } from '../../Component/data/useSaveDesignData';

// import { useNavigate } from "react-router-dom";


const PageDesignState = (props) => {
    // const navigate = useNavigate();
    const {saveDesign} = useSaveDesignData()

    const dropPosition = useRef(0)
    const nodeLevel = useRef(null)

    const activeElemLayer = useRef(null);


    const [design, setDesign] = useState(InitialDeisgnState);
    const [actElLayer, setELLayer] = useState("0,");
    const [webDesignState, setWebDesignState] = useState({});

    const saveWebPage = async () => {
        saveDesign({...design})
    }

    const removeWebPage = async () => {
       
    }

    const getWebPageImageAndSavePage = async (type = "save") => {

        try {
            let sizes = document.querySelector('[data-prevpanel]').getBoundingClientRect();

            await htmlToImage.toJpeg(document.querySelector('[data-prevpanel]'), { quality: 0.95, width: sizes.width, height: (205 / 280) * sizes.width, canvasWidth: 280, canvasHeight: 205, backgroundColor: '#ffffff' })
                .then(function (dataUrl) {
                    //
                    saveWebPage(200, dataUrl, type)
                }).catch(err => {
                    saveWebPage(500, "")
                })
        } catch (e) {

            alert("Unable to save the webpage! Try again!");
        }
    }


    const publishWebPage = async () => {

        if (design.elements.length < 1) {
            alert("Can not publish blank page. Add elements to publish.");
            return;
        }
        getWebPageImageAndSavePage("publish");

    }
    // useEffect(() => {
    //     
    // }, [design])

    return (
        <pageDesignContext.Provider value={{ design, setDesign, dropPosition, publishWebPage, nodeLevel, activeElemLayer, actElLayer, setELLayer, webDesignState, setWebDesignState, getWebPageImageAndSavePage, removeWebPage, saveWebPage }}>
            {props.children}
        </pageDesignContext.Provider>
    )
}


export default PageDesignState;
