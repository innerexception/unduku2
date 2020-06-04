import * as React from 'react';
import AppStyles, { colors } from '../../AppStyles'
import Splash from '../views/Splash';
import CanvasFrameChrome from '../canvas/CanvasFrameChrome';

interface Props {
    modal:BuildingType
}

export default class UIManager extends React.Component<Props> {

    render(){
        return (
            <div style={styles.frame}>
                <CanvasFrameChrome/>
            </div>
        )
    }
}

const styles = {
    frame: {
        height: '100vh',
        background: colors.background,
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    dot: {
        height:'0.5em',
        width:'0.5em',
        borderRadius: '0.5em'
    },
    statusDot: {
        position:'absolute' as 'absolute', bottom:'0.5em', right:'0.5em',
        display:'flex',
        color: colors.black,
        alignItems:'center'
    }
}