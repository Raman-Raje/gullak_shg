import { type } from "@testing-library/user-event/dist/type";
import { duration } from "moment";


export const shgData = [
    {
        basicDetails: {
            name: 'Dawson Inc',
            address: '5797 Nichols Mountain\nNew Brandonberg, DE 25512',
            phone: '369.027.6892',
            email: 'george35@yahoo.com',
            max_members: 320,
            is_registered: false,
            registration_number: '',
            registration_date: '2023-01-10',
            lock_in_period: 16,
        },
        contributionDetails: {
            meeting_frequency: 'Monthly',
            joining_fee: 300,
            contribution_frequency: 'Monthly',
            contribution_amount: 200,
            contribution_late_fee_rate: 300,
        },
        bankDetails: {
            bank_name: 'Valdez-Moore',
            bank_branch: 'Jones Trace',
            account_number: 'AHIC85167011016798',
            ifsc_code: 'SONUGBPL',
            account_holder_name: 'Shelly Rodriguez',
            account_type: 'Savings',
            lock_in_period: 20,
        },
        loanDetails: {
            loan_limit: 8900,
            loan_interest_rate: 1000,
            loan_duration: 40,
            loan_payment_mode: 'Quarterly',
            loan_late_fee_rate: null,
        },
    },
    {
        basicDetails: {
            name: 'Munoz, Johnson and Gardner',
            address: 'PSC 9368, Box 5015\nAPO AP 42505',
            phone: '288.254.9654x227',
            email: 'kellermary@hotmail.com',
            max_members: 60,
            is_registered: false,
            registration_number: '42e77479-a8b1-4294-8701-e790b032a0ac',
            registration_date: '2021-11-23',
            lock_in_period: null,
        },
        contributionDetails: {
            meeting_frequency: 'Monthly',
            joining_fee: 300,
            contribution_frequency: 'Monthly',
            contribution_amount: 100,
            contribution_late_fee_rate: 500,
        },
        bankDetails: {
            bank_name: 'Ball Group',
            bank_branch: 'Anne Cliff',
            account_number: 'QSPL62828375538617',
            ifsc_code: 'LMYJGBC1',
            account_holder_name: 'Charles Cook',
            account_type: 'Savings',
            lock_in_period: null,
        },
        loanDetails: {
            loan_limit: 40300,
            loan_interest_rate: 700,
            loan_duration: 33,
            loan_payment_mode: 'Monthly',
            loan_late_fee_rate: null,
        },
    },
    {
        basicDetails: {
            name: 'Adams-Pena',
            address: 'USNS Kelley\nFPO AA 24484',
            phone: '(331)278-9376x6390',
            email: 'matthewarellano@gamble.com',
            max_members: 280,
            is_registered: false,
            registration_number: '',
            registration_date: '2020-02-13',
            lock_in_period: 4,
        },
        contributionDetails: {
            meeting_frequency: 'Weekly',
            joining_fee: 200,
            contribution_frequency: 'Monthly',
            contribution_amount: 300,
            contribution_late_fee_rate: 400,
        },
        bankDetails: {
            bank_name: 'Bush-West',
            bank_branch: 'Christopher Parkways',
            account_number: 'XBRY00759310552028',
            ifsc_code: 'HLOCGBRB',
            account_holder_name: 'Angelica Wright',
            account_type: 'Current',
            lock_in_period: null,
        },
        loanDetails: {
            loan_limit: 45200,
            loan_interest_rate: 500,
            loan_duration: 51,
            loan_payment_mode: 'Quarterly',
            loan_late_fee_rate: 100,
        },
    },
];



const sghArray = [
    {
        _id: '1',
        name: 'Some Long SHG Name',
        address: 'Address 1',
        totalMembers: 25,
        assignedRole: 'admin',
        members: [
            {
                _id: '1',
                name: 'Member 1',
                age: 30,
                role: 'member',
            },
            {
                _id: '2',
                name: 'Member 2',
                age: 25,
                role: 'admin',
            },
            {
                _id: '3',
                name: 'Member 3',
                age: 35,
                role: 'member',
            },
            {
                _id: '4',
                name: 'Member 4',
                age: 40,
                role: 'crp',
            },
        ],
    },
    {
        _id: '2',
        name: 'some another long SHG Name to test',
        address: 'Address 2',
        totalMembers: 3,
        assignedRole: 'member',
        members: [
            {
                _id: '1',
                name: 'Member 1',
                age: 30,
                role: 'member',
            },
            {
                _id: '2',
                name: 'Member 2',
                age: 25,
                role: 'admin',
            },
            {
                _id: '3',
                name: 'Member 3',
                age: 35,
                role: 'member',
            },
        ],
    },
    {
        _id: '3',
        name: 'Proud husband and father, my amazing wife Nerea, and our wonderful children Naia and Ibai are the loves of my life.',
        address: 'Address 3',
        totalMembers: 2,
        assignedRole: 'member',
        members: [
            {
                _id: '1',
                name: 'Member 1',
                age: 30,
                role: 'member',
            },
            {
                _id: '2',
                name: 'Member 2',
                age: 25,
                role: 'admin',
            },
        ],
    },
    {
        _id: '4',
        name: 'SHG 4',
        address: 'Address 4',
        totalMembers: 3,
        assignedRole: 'crp',
        members: [
            {
                _id: '1',
                name: 'Member 1',
                age: 30,
                role: 'member',
            },
            {
                _id: '2',
                name: 'Member 2',
                age: 25,
                role: 'admin',
            },
            {
                _id: '3',
                name: 'Member 3',
                age: 35,
                role: 'member',
            },
        ],
    },
    {
        _id: '5',
        name: 'SHG 5',
        address: 'Address 5',
        totalMembers: 2,
        assignedRole: 'member',
        members: [
            {
                _id: '1',
                name: 'Member 1',
                age: 30,
                role: 'member',
            },
            {
                _id: '2',
                name: 'Member 2',
                age: 25,
                role: 'admin',
            },
        ],
    },
];

// members list
export const randomMembers = [
    {
        _id: '35aa42b0-dbe5-4a93-a92e-6729ecca2998',
        fullName: 'Allison Riley',
        age: 31,
        role: 'member',
        status: 'inactive',
        phone: '+1-679-513-9316',
    },
    {
        _id: '77a4cd33-b141-458b-8be4-06344c1141ef',
        fullName: 'Elizabeth Robertson',
        age: 18,
        role: 'member',
        status: 'active',
        phone: '360-725-9729',
    },
    {
        _id: '6bbd97a3-2b1f-47d9-85a3-9f4f739677b5',
        fullName: 'April Spencer',
        age: 41,
        role: 'member',
        status: 'active',
        phone: '(342)741-5905x1466',
    },
    {
        _id: 'f00c6e13-5291-4c87-9cda-fdb05e9b610d',
        fullName: 'Vanessa Anderson',
        age: 42,
        role: 'member',
        status: 'inactive',
        phone: '+1-308-942-3423x1823',
    },
    {
        _id: 'b6470613-f2c0-4e9b-9d2b-24e6cb1e364b',
        fullName: 'Lindsey Curtis',
        age: 38,
        role: 'member',
        status: 'inactive',
        phone: '001-739-549-5007x703',
    },
    {
        _id: '3450371d-5ff0-4a1c-8d14-e244bf1b79fc',
        fullName: 'Austin Davidson',
        age: 43,
        role: 'member',
        status: 'inactive',
        phone: '(239)109-5094',
    },
    {
        _id: 'f9beacfe-aeed-4d7b-9234-1dd1c87d0863',
        fullName: 'Anthony Peters',
        age: 69,
        role: 'member',
        status: 'active',
        phone: '704.312.0783x092',
    },
    {
        _id: '4f0863bf-953b-4dce-92bc-b4c31597e546',
        fullName: 'Christopher Ashley',
        age: 59,
        role: 'member',
        status: 'active',
        phone: '771-832-3169x46970',
    },
    {
        _id: '841b7b2d-6ccd-4629-9837-94d19505ad8e',
        fullName: 'Elizabeth Sullivan',
        age: 52,
        role: 'member',
        status: 'inactive',
        phone: '+1-291-728-2866x374',
    },
    {
        _id: '0c12a938-27e2-4808-9f90-1bf427a1d1a4',
        fullName: 'Rodney Douglas',
        age: 18,
        role: 'member',
        status: 'inactive',
        phone: '328.505.1276',
    },
];

// loan data
export const randomLoans = [
    {
        _id: 'a298bff7-4cbb-42e2-8f87-31c18c331875',
        fullName: 'Cynthia Ryan',
        amount: 2204,
        status: 'rejected',
        date: '2024-05-24',
        time: '11:02 PM',
        duration: 21, // in months
    },
    {
        _id: '485fb4e5-3f61-4eb6-84f3-ef87b7232d94',
        fullName: 'Bradley Johnson',
        amount: 4338,
        status: 'rejected',
        date: '2024-03-12',
        time: '09:02 AM',
        duration: 20, // in months
    },
    {
        _id: '7dcb27f3-3100-4301-b6cc-d7a877070605',
        fullName: 'Robert Elliott',
        amount: 2317,
        status: 'approved',
        date: '2024-05-06',
        time: '02:49 AM',
        duration: 12, // in months
    },
    {
        _id: '8f33c1fa-e737-426d-914e-ff87578e54c8',
        fullName: 'Emily Garcia',
        amount: 1316,
        status: 'pending',
        date: '2024-05-31',
        time: '01:56 AM',
        duration: 6, // in months
    },
    {
        _id: 'fe060814-249a-4423-a381-a539a4e99761',
        fullName: 'David Mcneil',
        amount: 4563,
        status: 'rejected',
        date: '2024-02-04',
        time: '07:43 AM',
        duration: 7, // in months
    },
    {
        _id: 'b2d6f675-f1b6-4a60-9771-16a674bccfbd',
        fullName: 'Chelsea Kaufman',
        amount: 3854,
        status: 'pending',
        date: '2024-02-10',
        time: '02:06 PM',
        duration: 8, // in months
    },
    {
        _id: '5cacec34-fab4-4a10-86a0-9398d20b51e2',
        fullName: 'Dustin Sanders',
        amount: 4225,
        status: 'closed',
        date: '2024-05-01',
        time: '04:19 PM',
        duration: 22, // in months
    },
    {
        _id: 'df2c0c81-b422-4695-9200-80fcfc220f47',
        fullName: 'William Montoya Jr.',
        amount: 3861,
        status: 'closed',
        date: '2024-01-13',
        time: '11:23 AM',
        duration: 10, // in months
    },
    {
        _id: 'fc8a9383-069a-4646-a8fe-3e706467bead',
        fullName: 'Steven Rivera',
        amount: 2754,
        status: 'disbursed',
        date: '2024-01-18',
        time: '05:02 AM',
        duration: 7, // in months
    },
    {
        _id: '67ad81bf-b1c5-45ef-9624-d05558839289',
        fullName: 'Charles Pugh',
        amount: 3075,
        status: 'rejected',
        date: '2024-04-29',
        time: '03:51 AM',
        duration: 16, // in months
    },
];



// Generate some random notifications like this
// 1. Member 1 has been added to SHG
// 2. Member 2 has been removed from SHG
// 3. Contribution of 5000 has been made by Member 1 to SHG
// 4. Loan of 10000 has been approved for Member 2
// 5. Loan of 5000 has been rejected for Member 3

export const notifications = [
    {
        _id: '1',
        title: 'Member 1 has been added to SHG',
        date: '2024-06-14',
        time: '10:30 AM',
        status: 'unread',
        type: 'info',
    },
    {
        _id: '2',
        title: 'Member 2 has been removed from SHG',
        date: '2024-06-14',
        time: '10:30 AM',
        status: 'read',
        type: 'warning',
    },
    {
        _id: '3',
        title: 'Contribution of 5000 has been made by Member 1 to SHG',
        date: '2024-06-14',
        time: '10:30 AM',
        status: 'unread',
        type: 'info',
    },
    {
        _id: '4',
        title: 'Loan of 10000 has been approved for Member 2',
        date: '2024-06-14',
        time: '10:30 AM',
        status: 'unread',
        type: 'success',
    },
    {
        _id: '5',
        title: 'Loan of 5000 has been rejected for Member 3',
        date: '2024-06-14',
        time: '10:30 AM',
        status: 'unread',
        type: 'error',
    },
    {
        _id: '6',
        title: 'Member 1 has been added to SHG',
        date: '2024-06-14',
        time: '10:11 AM',
        status: 'unread',
        type: 'info',
    },
    {
        _id: '7',
        title: 'Member 2 has been removed from SHG',
        date: '2024-06-14',
        time: '10:30 AM',
        status: 'read',
        type: 'warning',
    },
    {
        _id: '8',
        title: 'Contribution of 5000 has been made by Member 1 to SHG',
        date: '2024-06-14',
        time: '10:30 AM',
        status: 'unread',
        type: 'info',
    },
    {
        _id: '9',
        title: 'Loan of 10000 has been approved for Member 2',
        date: '2024-06-14',
        time: '09:30 AM',
        status: 'unread',
        type: 'success',
    }
];

export default sghArray;