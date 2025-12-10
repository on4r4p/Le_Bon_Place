import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://127.0.0.1:4001",
    documents: ["**/*.{gql,graphql}"],
    ignoreNoDocuments: true,
    generates: {
        "./src/grafq/gen/schema.ts": {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo", { "add": { content: '// @ts-nocheck' } }],

        },
    },
    config: {
        apolloReactCommonImportFrom: "@apollo/client/react",
        apolloReactHooksImportFrom: "@apollo/client/react",
    }
};

export default config;