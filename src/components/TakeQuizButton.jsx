
export default function Button({ color, bgColor, type, children }) {
    const btn = {
        color: color,
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: '1rem',
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '5px',
        padding: '0 1.5rem',
        cursor: 'pointer',
        width: 'fit-content'
    };

    return (
        <button style={btn} type={type ? type : ""}>{children}</button>
    );
}