import {RightBranchA} from "./RightBranchA.tsx";
import {RightBranchB} from "./RightBranchB.tsx";
import {useCallback} from "react";

export const RightBranch = () => {

    const foo = useCallback( ()=> {
        console.log('function - foo');
    }, []);

    return (
        <div className={'item-wrapper'}>
            <div>RightBranch</div>
            <RightBranchA/>
            <RightBranchB foo={foo} />
        </div>
    );
};