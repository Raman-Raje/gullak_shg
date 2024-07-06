// src/hooks/useGroupId.js
import { useLocation } from 'react-router-dom';

const useGroupId = () => {

  const location = useLocation();
  return location.pathname.split('/')[2];
};

export default useGroupId;
