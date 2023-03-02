import { useState, useEffect } from 'react';

const useTitle = (initalTitle: string) => {
    const [title, setTitle] = useState<string>(initalTitle)

    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        if (htmlTitle !== null) {
            htmlTitle.innerText = title;
        }
    }
    useEffect(updateTitle, [title])

    return setTitle;
}

export default useTitle;