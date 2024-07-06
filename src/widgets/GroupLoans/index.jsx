
// components
import OptionsNav from '@components/OptionsNav';
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import TodosLegend from '@components/TodosLegend';
import RequestLoan from '@components/RequestLaon';

// hooks
import { useState, useRef, useEffect } from 'react';

// widgets
import { Header } from '@components/Widget/style';

import MemberCard from '@components/MemberCard';

import { loanOptions } from '@constants/options';

import { NavWrapper,AddButton } from './style';

// data
import { randomLoans } from '@constants/shg';

import useStatusFilter from '@hooks/useStatusFilter';

const GroupLoans = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const listRef = useRef(null);

    // current filter by status
    const { status, setStatus, getStatus } = useStatusFilter(randomLoans);

    useEffect(() => {
        listRef.current.scrollTo(0, 0);
    }, [isFormVisible]);

    return (
        <Widget name="Loans" >
            <WidgetHeader title="Loans" style={{ paddingBottom: 0 }} elRef={headerRef}>
                <AddButton onClick={() => setFormVisible(true)}
                    className={isFormVisible ? 'disabled' : ''}
                    aria-label="Add new task"
                >
                    +
                </AddButton>
            </WidgetHeader>
            <Header sidePadding={true}>
                <NavWrapper>
                    <OptionsNav options={loanOptions} state={status} handler={setStatus} />
                </NavWrapper>
            </Header>
            <WidgetBody>
                <MemberCard type="loan" arr={status.value === 'all' ? randomLoans : getStatus(status)} />
                <div className="track" ref={listRef} style={{ overflowY: isFormVisible ? 'hidden' : 'auto' }}>
                    <RequestLoan isVisible={isFormVisible} visibilityHandler={setFormVisible} />
                </div>
                <div ref={footerRef} style={{ marginTop: 18 }}> 
                    <TodosLegend />
                </div>
            </WidgetBody>
        </Widget>
    )
}

export default GroupLoans;