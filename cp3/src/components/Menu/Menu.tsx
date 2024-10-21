import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/challengerSprint"}>Challenger Sprints</Link></li>
                <li><Link href={"/checkPoints"}>Check Points</Link></li>
                <li><Link href={"/globalSolution"}>Global Solution</Link></li>
            </ul>
        </nav>

    )
}