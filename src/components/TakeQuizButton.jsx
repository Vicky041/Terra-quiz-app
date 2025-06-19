
export function Button({ color, bgColor, type, children }) {
    const btn = {
        color: color,
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: '1.4rem',
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '5px',
        padding: '1rem 1.5rem',
        cursor: 'pointer',
    };

    return (
        <button style={btn} type={type ? type : ""}>{children}</button>
    );
}