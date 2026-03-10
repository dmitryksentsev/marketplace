import { SvgIcon, type SvgIconProps } from '@mui/material';

const PlusIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      d="M12 5V19"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />

    <path
      d="M5 12H19"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </SvgIcon>
);

export default PlusIcon;
