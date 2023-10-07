import fs from 'fs';
import os from 'os';

const fetchTodos = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(
        (response) => response.json()
    );
};

const read = async (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

export default function ({ setGenerator }) {
    setGenerator('async', {
        description: 'Async generator with custom action',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'File name'
            }
        ],
        actions: [
            async function customAction(answers, config, plop) {
                try {
                    const todos = await fetchTodos();
                    const templatePath = `${os.homedir()}/repositories/jarvis/plop-templates/async/table.csv.hbs`;
                    const rawData = {
                        data: todos
                    };

                    const compiled = plop.renderString(
                        await read(templatePath),
                        rawData
                    );

                    await fs.writeFile(
                        `${answers.name}.csv`,
                        compiled,
                        (err) => {
                            if (err) console.error(err);
                        }
                    );

                    return 'Successfully wrote CSV file';
                } catch (error) {
                    console.log(error);
                }
            }
        ]
    });
}
