export default function ({ setGenerator }) {
    setGenerator('remix-route', {
        description: 'Remix route in Typescript',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: process.cwd(),
                templateFiles: 'plop-templates/remix-route/**/*.hbs',
                base: 'plop-templates/remix-route'
            }
        ]
    });
}
