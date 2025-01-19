function Header({ text }: { text: string }) {
    return (
        <div className="header">
            <div><h1>{text}</h1></div>
        </div>
    )
}

export default Header;