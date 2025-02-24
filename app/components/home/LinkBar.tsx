import Link from "next/link";
import { Icon } from '@iconify/react';

const LinkBar = () => {
    return <div className="grid grid-flow-col gap-4">
        <Link className="hover:drop-shadow-[0_0_0.3rem_#ffffffff]" href="/github" target="_blank" >
            <Icon className="dark:invert" icon="logos:github-icon" width="31" height="34" />
        </Link>
        <Link className="hover:drop-shadow-[0_0_0.3rem_#ffffffff]" href="/resume" target="_blank">
            <Icon icon="mdi:resume" width="31" height="34" />
        </Link>
        <Link className="hover:drop-shadow-[0_0_0.3rem_#ffffffff]" href="/linkedin" target="_blank">
            <Icon icon="logos:linkedin-icon" width="31" height="34" />
        </Link>
    </div>
}

export default LinkBar;