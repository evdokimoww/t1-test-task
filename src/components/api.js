export const getData = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            headers: {
                meta: {
                    total: 5,
                    page: 1
                }
            },
            payload: {
                items: [
                    {id: 1, title: 'cccccccc'},
                    {id: 2, title: 'bbbbbbbb'},
                    {id: 3, title: 'zzzzzzzz'},
                    {id: 4, title: 'nnnnnnnn'},
                    {id: 5, title: 'pppppppp'}]
            }
        });
    }, 1000);
});