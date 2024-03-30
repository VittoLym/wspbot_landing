// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

export default NuxtAuthHandler({/* 
    secret: 'my-superb-secret', */
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: 'cd85b096cc465af9fe2c',
           clientSecret: 'd9f36f7d89c909a3b72fa4e814880b4530364a07'
        })
    ]
})
