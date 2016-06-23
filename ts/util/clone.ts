function clone <T> (obj: T | T[]) : T | T[] {

    if (Array.isArray(obj)) {

        return <T[]> obj.map( clone )

    } else if ( typeof obj === 'object' && obj !== null) {

        let newObj = <T>{},
            attr: string

        for (attr in obj) {
            if (Object.hasOwnProperty.call(obj, attr)) {
                newObj[attr] = clone(obj[attr])
            }
        }

        return newObj

    } else {

        return obj

    }

}

export default clone
