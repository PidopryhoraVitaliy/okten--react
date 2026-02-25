import {RightBranchTheme} from "./RightBranchTheme.tsx";
import {type FC, memo} from "react";

type PropType = {
    foo: () => void;
}

export const RightBranchB: FC<PropType> = memo((foo) => {

    // foo();

    for (let i = 0; i < 3000; i++) {
        console.log('delay - RightBranchB');
    }

    return (
        <div className={'item-wrapper'}>
            RightBranchB
            <RightBranchTheme/>
        </div>
    );
});