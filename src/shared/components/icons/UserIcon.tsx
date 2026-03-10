import { SvgIcon, type SvgIconProps } from '@mui/material';

const UserIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="7.25" fill="none" r="4" stroke="#C9C9C9" stroke-width="2" />

    <path
      d="M9 13.75H15C16.6569 13.75 18 15.0931 18 16.75V20.75H6V16.75C6 15.1449 7.26055 13.8342 8.8457 13.7539L9 13.75Z"
      fill="none"
      stroke="#CACACA"
      stroke-width="2"
    />
  </SvgIcon>
);

export default UserIcon;
