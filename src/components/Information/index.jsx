import { List, ListItem, TextContent, Wrapper, SectionTitle } from './style';

const Information = ({ basicDetails, contributionDetails, bankDetails, loanDetails }) => {

    return (
        <>
            <SectionTitle>Basic Details</SectionTitle>
            <List>
                <ListItem>
                    <TextContent>Name: {basicDetails.group_name}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Address: {basicDetails.address}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Phone: {basicDetails.phone_number}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Email: {basicDetails.email}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Max Members: {basicDetails.max_members}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Registered: {basicDetails.is_registered ? 'Yes' : 'No'}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Registration Number: {basicDetails.registration_number}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Registration Date: {basicDetails.registration_date}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Lock-in Period: {basicDetails.lock_in_period}</TextContent>
                </ListItem>
            </List>

            <SectionTitle>Contribution Details</SectionTitle>
            <List>
                <ListItem>
                    <TextContent>Joining Fee: {contributionDetails.joining_fee}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Meeting Frequency: {contributionDetails.meeting_frequency}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Contribution Frequency: {contributionDetails.contribution_frequency}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Contribution Amount: {contributionDetails.contribution_amount}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Contribution Day: {contributionDetails.contribution_day}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Contribution Penalty: {contributionDetails.contribution_penalty}</TextContent>
                </ListItem>
            </List>

            <SectionTitle>Bank Details</SectionTitle>
            <List>
                <ListItem>
                    <TextContent>Bank Name: {bankDetails.bank_name}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Bank Branch: {bankDetails.bank_branch_name}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Account Number: {bankDetails.bank_account_number}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>IFSC Code: {bankDetails.bank_ifsc_code}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Account Holder: {bankDetails.bank_account_holder}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Account Type: {bankDetails.bank_account_type}</TextContent>
                </ListItem>
            </List>

            <SectionTitle>Loan Details</SectionTitle>
            <List>
                <ListItem>
                    <TextContent>Max Loan Limit: {loanDetails.max_loan_amount}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Interest Rate: {loanDetails.loan_interest_rate}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Max Loan Duration: {loanDetails.max_loan_duration}</TextContent>
                </ListItem>
                <ListItem>
                    <TextContent>Installment Penalty: {loanDetails.installment_penalty}</TextContent>
                </ListItem>
            </List>
        </>
    )
}

export default Information
