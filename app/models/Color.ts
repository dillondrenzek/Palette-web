export class Color {

    constructor(public color: string) { }

    static isRGB(s: string): boolean {
        var values: string[] = s.replace('rgb', '')
            .replace('(', '')
            .replace(')', '')
            .split(',');

        console.log('---');

        for (var i = 0; i < values.length; i++) {
            var v: number = parseInt(values[i]);
            console.log(v);
            if (isNaN(v)) { return false; }
            if (v > 255) { return false; }
            if (v < 0) { return false; }
        }

        console.log('passed');
        console.log(values);

        return (
            s.startsWith('rgb(')
            && s.endsWith(')')
            && values.length === 3
        );
    }

    static isHex(s: string): boolean {

        var hexCharacters: RegExp = /^#?(?:[0-9a-f]{3}){1,2}$/i;

        return (
            hexCharacters.test(s)
        );
    }

    static isColorName(s: string): boolean {
        var colorNames: RegExp = /^(red|orange|yellow|green|blue|purple|white|black)$/;
        return colorNames.test(s);
    }

    static isHSL(s: string): boolean {
        // verify format
        if (!s.match(/^hsl\(([0-9]{1,3}%?(\ )?\,(\ )?){2}([0-9]{1,3}%?(\ )?){1}\)$/)) {
            return false;
        }


        // verify values
        var values: string[] = s.replace('hsl', '')
            .replace('(', '')
            .replace(')', '')
            .split(',');

        // 3 values
        if (values.length !== 3) { return false; }

				console.log('before', s);

        // values are up to 3 digits with an optional '%'
        for (var i = 0; i < values.length; i++) {
            var str = values[i].replace(' ', '');
            if (!str.match(/^[0-9]{1,3}%?$/)) { return false; }
						console.log('before ', s);
            var percentage: RegExp = /^[0-9]{1,3}%$/;
            var isPercent: boolean = percentage.test(str);
            var parsed: number = parseInt(str);

            // negative numbers
            if (parsed < 0) { return false; }

            if (isPercent) {
                if (parsed > 100) { return false; }
            } else {
                if (i === 0 && (parsed > 360)) { return false; }
								if (i > 0 && (parsed > 100)) { return false; }
            }
        }

				console.log('after', s);

        return true;
    }

    static isValid(s: string): boolean {

        var valid: boolean = (
            Color.isHex(s)
            || Color.isColorName(s)
            || Color.isRGB(s)
						|| Color.isHSL(s));

        return valid;
    }
}
