import React from 'react';

export const ForgotPasswordPageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/motdepasse-oublie',
            component: React.lazy(() => import('./ForgotPasswordPage'))
        }
    ]
};
