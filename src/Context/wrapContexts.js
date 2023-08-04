import React from 'react'
import PageDesignState from './PageDesign/pageDesignState';
import DragElemsState from './DragElems/dragElemsState';
import CssSheetPreviewState from './cssSheetPreview/cssSheetPreviewState';
export default function wrapContexts(props) {
    return (
        <>
            <CssSheetPreviewState>
                    <PageDesignState>
                        <DragElemsState>
                            {props.children}
                        </DragElemsState>
                    </PageDesignState>
            </CssSheetPreviewState>
        </>
    )
}
