import * as m from 'mithril'

class Model {

    /**
    * _param attributeName <string>
    * Simple accessor method to retrive a value
    * from the model's internal attributes hash
    */
    get (attributeName: string) {
        return this.attributes[attributeName]
    }

    /**
    * _param attributeName <string|Object>
    * The name of the attribute to set. Or object with key->value pairs
    * representing multiple attributeName->attributeValue pairs to set
    *
    * _param attributeValue <any>
    * The value of the attribute to be set.
    */
    set (attributeName: any, attributeValue?: any) {
        if (typeof attributeName === 'object') {
            Object.keys(attributeName).forEach((attr) => {
                this.set(attr, attributeName[attr])
            })
        } else {
            this.attributes[attributeName] = attributeValue
        }
    }

    /**
    * Retrieves model data from the server, sending
    * in a GET request.
    */
    fetch () : Mithril.Promise<any> {
        var req: Mithril.XHROptions = {
            method: 'GET',
            url: this.getUrl('fetch')
        }

        if (this.beforeRequest) req.config = this.beforeRequest

        var promise = m.request(req)


        promise.then((res) => {
            this.set(res)

            if (this.hasFetched() === false) {
                this.hasFetched(true)
                this.fetchedDeferred.resolve()
            }
        })

        return promise
    }

    /**
    * Returns a promise that resolves when the model has completed it's
    * first fetch, and hasFetched() is initially marked true
    */
    fetched () : Mithril.Promise<any> {
        return this.fetchedDeferred.promise
    }

    /**
    * Save the models state to the server.
    * Sends in the model's attribute hash
    * as data in a PUT request
    */
    save () : Mithril.Promise<any> {
        var req: Mithril.XHROptions = {
            method: 'PUT',
            data: this.attributes,
            url: this.getUrl('save', this.attributes)
        }

        if (this.beforeRequest) req.config = this.beforeRequest

        var promise = m.request(req)

        promise.then((res) => {
            this.set(res)
        })

        return promise
    }

    /**
    * Function for retrieving the url for a request
    * action. Supplies the name of the action, and-
    * if any- data being sent in with the action.
    */
    getUrl (action: string, data?: any) : string {
        switch (action) {

        }
        return 'test'
    }


    beforeRequest   : (xhr: XMLHttpRequest, options: Mithril.XHROptions) => any

    /**
    * Default instance attributes
    */
    attributes      : {[name : string] : any}   = {}
    hasFetched      : Mithril.Property<boolean> = m.prop(false)
    fetchedDeferred : Mithril.Deferred<any>     = m.deferred()
    idAttribute     : string                    = 'id'
    urlRoot         : string                    = 'api'

    /**
    * Create a new model
    * As the first argument you may pass in the models initial attributes
    * hash. The second optional argument is an object that may contain
    * the idAttribute and urlRoot to be used by the model. Howver, these are
    * better defined on an extended Model class.
    * @see ModelOpts
    */
    constructor (attributes?: any) {
        if (attributes) this.attributes = attributes
    }

}

export default Model
