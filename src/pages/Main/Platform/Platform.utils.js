export const getStyles = (impuritiesPercentage) => {
    let fillColor = '#FFF23F'
    if (impuritiesPercentage > 85) {
        fillColor = '#EC645B'
    } else if (impuritiesPercentage < 60) {
        fillColor = '#39a644'
    }

    return {width: `${impuritiesPercentage}%`, background: fillColor}
}