import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

export default function Tooltip({ children, text }) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={
        <BootstrapTooltip id="tooltip" className="tooltip-custom">
          {text}
        </BootstrapTooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
}
