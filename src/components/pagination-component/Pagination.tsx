import {useSearchParams} from "react-router-dom";

export const Pagination = () => {

    const [query, setQuery] = useSearchParams({limit: "10", skip: "0"});

    const handleClick = (direction: string): undefined => {
        console.log('click', direction);
        const limit = query.get('limit');
        const skip = query.get('skip');
        let currentLimit: number = 10;
        if (limit) {
            currentLimit = +limit;
        }
        let currentSkip: number = 0;
        if (skip) {
            if (direction === '-') {
                currentSkip = +skip - currentLimit;
            } else if (direction === '+') {
                currentSkip = +skip + currentLimit;
            }
        }
        setQuery({limit: currentLimit.toString(), skip: currentSkip.toString()});
    }

    return (
        <div>
            <button onClick={handleClick("-")}>prev</button>
            <button onClick={handleClick("+")}>next</button>
        </div>
    );
};