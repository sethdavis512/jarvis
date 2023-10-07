export default function ({ setGenerator }) {
    setGenerator('tiny-react', {
        description: 'Tiny React app built using Parcel',
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
                destination: `${process.cwd()}/{{ kebabCase name }}/`,
                templateFiles: `plop-templates/tiny-react/**/*.hbs`,
                base: `plop-templates/tiny-react`
            }
        ]
    });
}
