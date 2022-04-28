import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'https://api.github.com/graphql',
            headers: {
                authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
            }
        }),
        cache: new InMemoryCache()
    })
}

export function initializeApollo(initialState = {}) {
    // Check if it was instantiated
    const apolloClientGlobal = apolloClient ?? createApolloClient()

    // Hydrates initial state if apolloClient is client side
    if (initialState) {
        apolloClientGlobal.cache.restore(initialState)
    }

    // Ensure SSR boot with clean cache
    if (typeof window === 'undefined') return apolloClientGlobal

    // If client side, create apolloClient
    apolloClient = apolloClient ?? apolloClientGlobal

    return apolloClient
}

export function useApollo(initialState = {}) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}