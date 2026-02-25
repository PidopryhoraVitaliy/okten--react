import {useMemo} from "react";

export const RightBranchA = () => {

    const memoDemo = useMemo(() => {
        for (let i = 0; i < 3000; i++) {
            console.log('delay - RightBranchA');
        }
        return null;
    }, []);

    return (
        <div className={'item-wrapper'}>
            RightBranchA
        </div>
    );
};