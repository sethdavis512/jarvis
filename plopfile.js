export default function (plop) {
    plop.setGenerator('react-component', {
        description: 'A React component and unit test written in Typescript',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name'
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/{{ pascalCase name }}`,
                templateFiles: 'plop-templates/react-component',
                base: 'plop-templates/react-component'
            }
        ]
    });
}
