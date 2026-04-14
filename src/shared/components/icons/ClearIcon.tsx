import { SvgIcon, type SvgIconProps } from '@mui/material';

const ClearIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 17 18">
    <path
      d="M1.01031 1.00002L15.0103 17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path d="M15 1.00002L1 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </SvgIcon>
);

export default ClearIcon;
