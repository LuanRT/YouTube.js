class Simplify {
    #schema;
    constructor(schema) {
        this.#schema = schema;
    }
    
    static matching(match) {
        if (match instanceof RegExp) {
            return new Simplify({
                type: 'regexmatch',
                match,
            });
        }
        if ([ 'string', 'number', 'boolean' ].includes(typeof match)) {
            return new Simplify({
                type: 'equalitymatch',
                match,
            });
        }
        return new Simplify({
            type: 'match',
            allOf: match,
        });
    }

    static matchingAny(match) {
        if (!Array.isArray(match)) {
            throw new Error('matchingAny expects an array');
        }
        return new Simplify({
            type: 'matchany',
            match: match.map(m => Simplify.matching(m)),
        });
    }

    match(data) {
        const { allOf } = this.#schema;
        let currentObject = data;
        const queuedObjects = [];
        const results = [];
        const keysToMatch = Object.keys(allOf);
        while(currentObject) {
            const targetKeys = Object.keys(currentObject);
            const matches = keysToMatch.every(key => {
                return targetKeys.includes(key) && allOf[key].runOn(currentObject[key]);
            })
            if (matches) {
                results.push(currentObject);
            }
            for (const key in currentObject) {
                const value = currentObject[key];
                if (value && typeof value === 'object') {
                    queuedObjects.push(value);
                }
            }
            currentObject = queuedObjects.shift();
        }
        return results;
    }

    runOn(data) {
        switch (this.#schema.type) {
            case 'match':
                return this.match(data);

            case 'regexmatch':
                return typeof data === 'string' && data.match(this.#schema.match);         
                
            case 'equalitymatch':
                return data === this.#schema.match;

            case 'matchany':
                return this.#schema.match.some(m => m.runOn(data));
        
            default:
                break;
        }
    }
}

module.exports = Simplify;