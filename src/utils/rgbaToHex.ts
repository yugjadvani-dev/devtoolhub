const rgbaToHex = (r: number, g: number, b: number, a: number): string => {
    const toHex = (n: number): string => {
        const hex = n.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    const alpha = Math.round(a * 255);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`
}

export default rgbaToHex;