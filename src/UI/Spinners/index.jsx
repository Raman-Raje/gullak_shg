import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import PropagateLoader from 'react-spinners/PropagateLoader'

// style
import { Container } from './style'
import { colors } from '@styles/vars'

const SyncLoaderSpinner = ({ loading }) => {
    return (
        <Container>
            <SyncLoader
                color={colors.primary}
                loading={loading}
            />
        </Container>
    )
}

const PropagateLoaderSpinner = ({ loading }) => {
    return (
        <Container>
            <PropagateLoader
                color={colors.primary}
                loading={loading}
            />
        </Container>
    )
}

export { SyncLoaderSpinner, PropagateLoaderSpinner }