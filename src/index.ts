type Translate = { [key: string]: string }

type Translates = { [key: string]: Translate }

let localization: Translates = {};

export function setLocalizations(data: Translates): void {
    localization = data;
}

export function trans(locale: string, key: string, ...args: Array<any>): string {
    const str = getTranslate(locale, key);
    let i = 0;
    return str.replace(/%?%s/g, function (s: string) {
        if (s === '%%s') {
            return '%s';
        }
        const replace = i in args ? args[i] : s;
        ++i;
        return replace;
    });
}

export function createTranslator(lang: string) {
    return function (key: string, ...args: Array<any>) {
        return trans(lang, key, ...args);
    };
}

function getTranslate(locale: string, key: string): string {
    if (key in localization[locale]) {
        return localization[locale][key];
    }
    return 'NO_TRANSLATE: ' + key;
}
