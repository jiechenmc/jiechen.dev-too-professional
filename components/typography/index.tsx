
interface TextProp {
    children: React.ReactNode
}
const P = ({ children }: TextProp) => {
    return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

const H2 = ({ children }: TextProp) => {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

const H4 = ({ children }: TextProp) => {
    return (
        <h4 className="scroll-m-20 text-m font-semibold tracking-tight">
            {children}
        </h4>
    )
}

export { P, H2, H4 }