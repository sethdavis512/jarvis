export default function (plop) {
    plop.setGenerator('ts-component', {
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
                templateFiles: 'plop-templates/ts-component',
                base: 'plop-templates/ts-component'
            }
        ]
    });
}
