// configuration file the react app
// const expressURI = 'http://localhost:5100';
// const socketURI = 'http://localhost:5100';
// const elasticURI = 'http://localhost:5300';
// const notificationURI = 'http://localhost:5200';
// const notificationSocketURI = 'http://localhost:5200';

// nginx configuration
const baseURI = '';
const expressURI = `${baseURI}/backend`;
const socketURI = `${baseURI}/backend/socket.io`;
const elasticURI = `${baseURI}/search`;
const notificationURI = `${baseURI}/notification`;


const logFile = 'frontend.log';
const window_size = process.env.CLINIC_WINDOW_SIZE || 7;
const env = process.env.NODE_ENV || 'development';
const BASE_URL = env === 'development' ? 'http://localhost:3000' : 'https://medyzer.com';
const GA_TRACKING_ID = 'G-6104QYF928';

const roles = {
    ADMIN: 'ADMIN',
    MEMBER: 'MEMBER',
    CRP: 'CRP',
    USER: 'USER',
    DOCTOR: 'DOCTOR',
};

const config = {
    ENV: env,
    WINDOW_SIZE: window_size,
    API: {
        expressURI,
        elasticURI,
        socketURI,
        notificationURI,
    },
    BASE_URL,
    LOGFILE: logFile,
    ROLES: roles,
    GA_TRACKING_ID,
};

export default config;