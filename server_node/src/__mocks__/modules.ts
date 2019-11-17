import * as models from 'src/model';

export async function getAllToDos() {
    const result = [] as models.ToDo[];
    for(let counter = 1; counter < 100; counter+=1 ) {
        result.push({
            id: counter,
            title: `モックタイトル${counter}`,
            detail: counter%2 === 0 ? undefined : `モック詳細${counter}`,
            create_at: new Date(),
            update_at: counter%3 === 0 ? new Date() : undefined,
        });
    }
    return result;
}
