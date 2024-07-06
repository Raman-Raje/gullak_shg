import styled from 'styled-components';
import { colors } from '@styles/vars';

import { CloudDownload, Globe, RotateCw, Search } from 'lucide-react';


export const Translate = styled(Globe)`
  width: 24px;
  height: 24px;
  color: ${colors.gray};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${colors.blue};
    transform: scale(1.1);
  }
`;

export const RefreshIcon = styled(RotateCw)`
  width: 24px;
  height: 24px;
  color: ${colors.gray};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${colors.blue};
    transform: scale(1.1);
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  color: ${colors.gray};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${colors.blue};
    transform: scale(1.1);
  }
`;

export const DownloadIcon = styled(CloudDownload)`
  width: 24px;
  height: 24px;
  color: ${colors.gray};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${colors.blue};
    transform: scale(1.1);
  }
`;