import {RightBranchA} from "./RightBranchA.tsx";
import {RightBranchB} from "./RightBranchB.tsx";

export const RightBranch = () => {
    return (
        <div className={'item-wrapper'}>
            <div>RightBranch</div>
            <RightBranchA/>
            <RightBranchB/>
        </div>
    );
};