export default function ({ setGenerator }) {
    setGenerator('use-fetch', {
        description: 'A custom useFetch hook',
        prompts: [],
        actions: [
            {
                type: 'addMany',
                destination: process.cwd(),
                templateFiles: 'plop-templates/use-fetch/**/*.hbs',
                base: 'plop-templates/use-fetch'
            }
        ]
    });
}
