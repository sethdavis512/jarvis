import fs from 'fs/promises';
import os from 'os';

const fetchTodos = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        const json = response.json();

        return json;
    } catch (error) {
        console.error(error);
    }
};

const read = async (filePath) => {
    try {
        const fileContents = await fs.readFile(
            filePath,
            'utf8',
            (err, data) => {
                if (err) console.error(err);
                return data;
            }
        );

        return fileContents;
    } catch (error) {
        console.error(error);
    }
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
