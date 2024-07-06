import React from 'react'

import Widget from '@components/Widget'
import WidgetBody from '@components/Widget/WidgetBody'

import Contributions from './Contributions'
import Loans from './Loans'
import Members from './Members'
import Information from './Information'
import Edit from './Edit'

import { GridContainer } from './style'
import WidgetHeader from '@components/Widget/WidgetHeader'

// store
import { useSelector } from 'react-redux';
import { selectMyGroup } from '@store/slices/myGroupSlice';

const Tiles = () => {

    const myGroup = useSelector(selectMyGroup);
    const { group_id, total_loans, total_members, assigned_role } = myGroup;
    return (
        <Widget name="Tiles">
            <WidgetHeader title="Sections" />
            <WidgetBody>
                <GridContainer>
                    <Contributions group_id={group_id} />
                    <Loans group_id={group_id} total_loans={total_loans} />
                    <Members group_id={group_id} total_members={total_members} />
                    <Information group_id={group_id} />
                    {
                        assigned_role === 'admin' && <Edit group_id={group_id} />
                    }
                </GridContainer>
            </WidgetBody>
        </Widget>
    )
}

export default Tiles