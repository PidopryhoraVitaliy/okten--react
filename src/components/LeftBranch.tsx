import {LeftBranchA} from "./LeftBranchA.tsx";
import {LeftBranchB} from "./LeftBranchB.tsx";

export const LeftBranch = () => {
    return (
        <div className={'item-wrapper'}>
            <div>LeftBranch</div>
            <LeftBranchA/>
            <LeftBranchB/>
        </div>
    );
};