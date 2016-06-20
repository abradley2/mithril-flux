import * as m from 'mithril'

class Collection {


    getUrl(action: string, data?: any) : string {


        return 'test'
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

    get (modelId: string | number) {

    }

    beforeRequest   : (xhr: XMLHttpRequest, options: Mithril.XHROptions) => any

    /**
    * Default instance properties
    */
    hasFetched: Mithril.Property<boolean> = m.prop(false)
    fetchedDeferred: Mithril.Deferred<any> = m.deferred()
    beforeRequest: (xhr: XMLHttpRequest, options: Mithril.XHROptions)
    url: string = 'api'
    modelId: string = 'id'
    models: any[] = []

    constructor () {

    }


}
