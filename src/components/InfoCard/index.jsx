import React from 'react';
import NamedAvatar from '@ui/NamedAvatar';
import { AvatarWrapper, InfoItem, InfoGrid, RoleChip } from './style';

import { Landmark, SearchCode } from 'lucide-react';
import Balance from '@components/Balance';

import { useSelector } from 'react-redux';
import { selectMyGroup } from '@store/slices/myGroupSlice';

const InfoCard = () => {

    const shg = useSelector(selectMyGroup);

    const { group_name, bank_account_number, bank_ifsc_code, assigned_role } = shg;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AvatarWrapper>
                <NamedAvatar sx={{ width: '100px', height: '100px' }} fullName={group_name} />
            </AvatarWrapper>
            <h2 style={{ margin: '5px 0' }}>{group_name}</h2>
            <RoleChip role={assigned_role}>{assigned_role}</RoleChip>
            <InfoGrid>
                <InfoItem><Landmark /> Account: {bank_account_number}</InfoItem>
                <InfoItem><SearchCode /> IFSC: {bank_ifsc_code}</InfoItem>
            </InfoGrid>
            <Balance />
        </div>
    );
};

export default InfoCard;

