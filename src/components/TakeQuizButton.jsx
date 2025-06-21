
export default function Button({ color, bgColor, type, padding, fs, wd, children }) {
    const btn = {
        color: color,
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: fs || '1.5rem',
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '5px',
        padding: padding || '.8rem 1.2rem',
        cursor: 'pointer',
        width: wd || '100%',
        margin: "0 auto"
    };

    return (
        <button style={btn} type={type ? type : ""}>{children}</button>
    );
}