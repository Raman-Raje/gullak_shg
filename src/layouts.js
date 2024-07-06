const layouts = {
    charts: {
        lg: [
            { i: 'variable-appointment-slot', x: 0, y: 0, w: 1, h: 2 },
            { i: 'radar', x: 1, y: 0, w: 1, h: 2 },
            { i: 'variable-appointment-type', x: 2, y: 0, w: 1, h: 2 },
            { i: 'static-gender', x: 0, y: 1, w: 1, h: 2 },
            { i: 'static-type', x: 2, y: 1, w: 1, h: 2 },
            { i: 'patients-radial', x: 1, y: 1, w: 1, h: 2 },
        ],
        md: [
            { i: 'variable-appointment-slot', x: 0, y: 0, w: 1, h: 2 },
            { i: 'radar', x: 1, y: 0, w: 1, h: 2 },
            { i: 'variable-appointment-type', x: 2, y: 0, w: 1, h: 2 },
            { i: 'static-gender', x: 0, y: 1, w: 1, h: 2 },
            { i: 'static-type', x: 2, y: 1, w: 1, h: 2 },
            { i: 'patients-radial', x: 0, y: 2, w: 1, h: 2 },
        ],
    },
    graphs: {
        lg: [
            { i: 'overall-appointments', x: 1, y: 0, w: 2, h: 2 },
            { i: 'patient-type-area', x: 1, y: 2, w: 2, h: 2 },
            { i: 'gender-scatter', x: 0, y: 0, w: 1, h: 4 },
        ],
        md: [
            { i: 'overall-appointments', x: 1, y: 0, w: 2, h: 2 },
            { i: 'patient-type-area', x: 1, y: 2, w: 2, h: 2 },
            { i: 'gender-scatter', x: 0, y: 0, w: 1, h: 4 },
        ],
    },

    finances: {
        lg: [
            { i: 'balance', x: 0, y: 0, w: 1, h: 1 },
            { i: 'payments-feed', x: 1, y: 0, w: 2, h: 4 },
            { i: 'payment-pace', x: 0, y: 1, w: 1, h: 1 },
            { i: "pay-overview", x: 0, y: 2, w: 1, h: 2 },
        ],
        md: [
            { i: 'balance', x: 0, y: 0, w: 1, h: 1 },
            { i: 'payments-feed', x: 1, y: 0, w: 1, h: 4 },
            { i: 'payment-pace', x: 0, y: 1, w: 1, h: 1 },
            { i: "pay-overview", x: 0, y: 2, w: 1, h: 2 },
        ],
    },
    home: {
        lg: [
            { i: 'create-appointment', x: 0, y: 0, minW: 0, minH: 0 },
            { i: 'appointment-list', x: 1, y: 0, minW: 0, minH: 0 },
        ],
        md: [
            { i: 'create-appointment', x: 0, y: 0, minW: 0, minH: 0 },
            { i: 'appointment-list', x: 1, y: 0, minW: 0, minH: 0 },
        ],
    },
    prescription: {
        lg: [
            { i: 'prescription-pad', x: 0, y: 0, w: 2, h: 4 },
            { i: 'patient', x: 2, y: 0, w: 3, h: 1 },
            { i: 'prescription', x: 2, y: 1, w: 3, h: 3 },
        ],
        md: [
            { i: 'prescription-pad', x: 0, y: 0, w: 2, h: 4 },
            { i: 'patient', x: 2, y: 0, w: 3, h: 1 },
            { i: 'prescription', x: 2, y: 1, w: 3, h: 3 },
        ],
    },
    shg : {
        lg: [
            { i: 'shg-info', x: 0, y: 1, w: 1, h: 4 },
            { i: 'balance', x: 0, y: 0, w: 1, h: 1 },
            {i: 'tiles', x: 1, y: 0, w: 2, h: 4},
        ],
        md: [
            { i: 'shg-info', x: 0, y: 1, w: 1, h: 4 },
            { i: 'balance', x: 0, y: 0, w: 1, h: 1 },
            {i: 'tiles', x: 1, y: 0, w: 2, h: 4},
        ],
    },

};

export const columnLayout = {
    prescription: { xl: 5, lg: 5, md: 2, sm: 1 }
}

export default layouts;