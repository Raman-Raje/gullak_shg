// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import MemberCard from '@components/MemberCard';
import Contribution from '@components/Contribution';

// ui
import Btn from '@ui/Btn';
import MonthNavigator from '@ui/Navigator/MonthNavigator'


import { useState, useRef, useCallback, useEffect } from 'react';
import useGroupId from '@hooks/useGroupId';

// constants
import { keyToMonth } from '@constants/mappings';
import { randomMembers } from '@constants/shg';

// supabase
import supabase from '@client/client';

const MonthlyContributions = () => {

    const group_id = useGroupId();
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    // current filter by 
    const number = new Date().getMonth();
    const year = new Date().getFullYear();
    const [isFormVisible, setFormVisible] = useState(false);
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [month, setMonth] = useState({ label: keyToMonth[number] + ' ' + year, number: number, year: year });

    const handlePayment = () => {
        setFormVisible(true);
    }

    const fetchMembers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.rpc('fetch_group_members', { group_id_input: group_id });

            if (error) throw error;

            setMembers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [group_id]);

    useEffect(() => {
        if (group_id) {
            fetchMembers();
        }
    }, [group_id, fetchMembers]);

    return (
        <Widget name="Contributions" >
            <WidgetHeader title="Contributions" flex='column' elRef={headerRef}>
                <MonthNavigator state={month} handler={setMonth} />
            </WidgetHeader>
            <WidgetBody>
                <MemberCard arr={members} type="installment" />
                <div ref={footerRef} style={{ marginTop: 20 }}>
                    <Btn text="Make Payment" handler={handlePayment} />
                </div>
                <Contribution isVisible={isFormVisible} visibilityHandler={setFormVisible} />
            </WidgetBody>
        </Widget>
    )
}

export default MonthlyContributions;