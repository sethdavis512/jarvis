export default function ({ setGenerator }) {
    setGenerator('hello-world', {
        description: 'First generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Your name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: process.cwd(),
                templateFiles: 'plop-templates/hello-world',
                base: 'plop-templates/hello-world'
            }
        ]
    });
}
