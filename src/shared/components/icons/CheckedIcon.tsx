import { SvgIcon, type SvgIconProps } from '@mui/material';

const CheckedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 22 22" {...props}>
    <rect x="0.5" y="0.5" width="21" height="21" rx="3.5" fill="#3C538E" />
    <rect x="0.5" y="0.5" width="21" height="21" rx="3.5" stroke="currentColor" fill="none" />
  </SvgIcon>
);

export default CheckedIcon;
