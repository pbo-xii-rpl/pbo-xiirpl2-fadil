function Button({children, variant}) {

return (
    <a className="border px-10 py-2 font-semibold text-lg border-yellow-300 rounded-full text-yellow-300">
        {children}
    </a>
    );
}

export default Button;