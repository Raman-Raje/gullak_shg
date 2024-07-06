// styled components
import { PositionEl, PositionLine, PositionNumber, ColorLine } from './style';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Confirmation from '@components/Confirmation';

// hooks
import useAuth from '@hooks/useAuth';
import useNotistack from '@hooks/useNotistack';
import useContentHeight from '@hooks/useContentHeight';

import { colors } from '@styles/vars';
import { FaCheck } from "react-icons/fa";
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router';

// forms
import BasicDetailsForm from "@forms/Group/BasicDetails";
import ContributionDetailsForm from "@forms/Group/ContributionDetails";
import BankDetailsForm from "@forms/Group/BankDetails";
import LoanDetailsForm from "@forms/Group/LoanDetails";

import supabase from '@client/client';


const steps = 5;

const sections = {
    0: "Basic Details",
    1: "Contribution Details",
    2: "Bank Details",
    3: "Loan Details",
    4: "Confirmation",
}

const CreateGroup = () => {

    const navigate = useNavigate();
    const { user_id } = useAuth();
    const { notify: notifySuccess } = useNotistack('SHG has been successfully created.', 'success');
    const { notify: notifyError } = useNotistack('Failed to create SHG', 'error');
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const listRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    const [basicDetails, setBasicDetails] = useState({
        group_name: '',
        address: '',
        phone_number: '',
        email: '',
        max_members: '',
        is_registered: false,
        registration_number: '',
        registration_date: null,
        lock_in_period: null,
    });

    const [contributionDetails, setContributionDetails] = useState({
        joining_fee: 0,
        meeting_frequency: '',
        contribution_frequency: '',
        contribution_amount: null,
        contribution_day: null,
        contribution_penalty: null,
    });

    const [bankDetails, setBankDetails] = useState({
        bank_name: '',
        bank_branch_name: '',
        bank_account_number: '',
        bank_ifsc_code: '',
        bank_account_holder: '',
        bank_account_type: '',
    });

    const [loanDetails, setLoanDetails] = useState({
        max_loan_amount: null,
        loan_interest_rate: null,
        max_loan_duration: null,
        installment_penalty: null,
    });

    const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, steps));

    const updateInitialValues = (values) => {
        if (activeStep === 0) {
            setBasicDetails(values);
        }
        else if (activeStep === 1) {
            setContributionDetails(values);
        }
        else if (activeStep === 2) {
            setBankDetails(values);
        }
        else if (activeStep === 3) {
            setLoanDetails(values);
        }
    };

    // singup function
    const handleSignUp = async () => {

        setLoading(true);

        const shg = {
            ...basicDetails,
            ...contributionDetails,
            ...bankDetails,
            ...loanDetails,
            created_by: user_id,
            updated_by: user_id,
        };

        console.log('SHG');
        console.log(shg);
        console.log(user_id);

        // insert the shg
        const { data, error } = await supabase
            .from('groups')
            .insert([shg]);

        if (error) {
            setError(error.message);
            notifyError();
        } else {
            notifySuccess();
        }

        setLoading(false);
        navigate('/');
    };

    const getStepContent = (step) => {

        switch (step) {
            case 0:
                return (
                    <BasicDetailsForm
                        initialValues={basicDetails}
                        onNext={handleNext}
                        updateInitialValues={updateInitialValues}
                    />
                );
            case 1:
                return (
                    <ContributionDetailsForm
                        initialValues={contributionDetails}
                        onNext={handleNext}
                        onBack={handleBack}
                        updateInitialValues={updateInitialValues}
                    />
                );
            case 2:
                return (
                    <BankDetailsForm
                        initialValues={bankDetails}
                        onNext={handleNext}
                        onBack={handleBack}
                        updateInitialValues={updateInitialValues}
                    />
                );
            case 3:
                return (
                    <LoanDetailsForm
                        initialValues={loanDetails}
                        onNext={handleNext}
                        onBack={handleBack}
                        updateInitialValues={updateInitialValues}
                    />
                );
            case 4:
                return (
                    <Confirmation
                        basicDetails={basicDetails}
                        contributionDetails={contributionDetails}
                        bankDetails={bankDetails}
                        loanDetails={loanDetails}
                        onNext={handleSignUp}
                        onBack={handleBack}
                    />
                );

        }
    };

    // Function to render the position elements dynamically
    const renderPositionElements = () => {
        const elements = [];
        for (let i = 0; i < steps; i++) {
            elements.push(
                <React.Fragment key={i}>
                    <PositionNumber
                        style={{
                            backgroundColor: activeStep > i ? colors.primary : colors.white,
                            color: activeStep > i ? colors.white : colors.primary,
                            transitionDuration: "500ms",
                        }}
                    >
                        {activeStep > i ? <FaCheck /> : i + 1}
                    </PositionNumber>
                    {i < steps - 1 && (
                        <PositionLine>
                            <ColorLine
                                style={{
                                    width: activeStep > i ? "100%" : "0%",
                                    transitionDelay: "500ms",
                                    transitionDuration: "1s",
                                }}
                            />
                        </PositionLine>
                    )}
                </React.Fragment>
            );
        }
        return elements;
    };

    return (
        <Widget name="CreateGroup">
            <WidgetHeader title="Create SHG" flex="column" style={{ paddingBottom: 18 }} elRef={headerRef}>
                <h3>{sections[activeStep]}</h3>
                <PositionEl>{renderPositionElements()}</PositionEl>
            </WidgetHeader>
            <WidgetBody>
                {getStepContent(activeStep)}
            </WidgetBody>
        </Widget>
    )
}

export default CreateGroup;