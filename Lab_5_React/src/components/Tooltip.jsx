import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

export default function Tooltip({ children, text }) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={
        <BootstrapTooltip
          id="tooltip"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            maxWidth: '280px'
          }}
        >
          {text}
        </BootstrapTooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
}
