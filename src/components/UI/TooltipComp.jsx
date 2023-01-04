import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TooltipComp = ({ children, text, placement }) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement={placement}
            delay={{ show: 250, hide: 300 }}
            overlay={renderTooltip}
        >
            {children}
        </OverlayTrigger>
    );
};

export default TooltipComp;
