import Avatar from '@mui/material/Avatar';

// utils
import PropTypes from 'prop-types';


const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

const stringAvatar = (name) => {
  if (!name) {
    return {
      sx: {
        bgcolor: 'red',
      },
      children: 'NA',
    };
  }

  const nameParts = name.split(' ');
  const initials = nameParts.length > 1
    ? `${nameParts[0][0]}${nameParts[1][0]}`
    : `${name[0]}`;

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
};

const NamedAvatar = ({ fullName, imageUrl, ...props }) => {
  const avatarProps = imageUrl
    ? { src: imageUrl }
    : stringAvatar(fullName);

  return <Avatar {...avatarProps} {...props} />;
};

NamedAvatar.propTypes = {
  fullName: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default NamedAvatar;
